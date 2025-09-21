import { db } from "./firebase";
import { collection, doc, runTransaction, Timestamp } from "firebase/firestore";

/**
 * Crea una orden y descuenta stock de forma atómica.
 * @param {{buyer:{name:string,email:string,phone?:string}, items:Array<{id:string|number,title:string,price:number,quantity:number}>}}
 * @returns {Promise<{orderId:string, total:number, createdAt:Timestamp}>}
 */
export async function createOrderAndDecrementStock({ buyer, items }) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Carrito vacío: no hay items para comprar.");
  }

  const ordersCol = collection(db, "orders");
  const orderRef = doc(ordersCol); // ID preasignado para referenciar en la transacción

  return await runTransaction(db, async (tx) => {
    let total = 0;
    const updates = [];

    for (const it of items) {
      const prodId = String(it.id); // Asegura ID string
      const prodRef = doc(db, "products", prodId);
      const snap = await tx.get(prodRef);

      if (!snap.exists()) {
        throw new Error(`Producto no existe: ${it.title ?? prodId}`);
      }

      const data = snap.data();
      const currentStock = Number(data.stock ?? 0);
      const need = Number(it.quantity ?? 0);
      const price = Number(it.price ?? 0);

      if (!Number.isFinite(need) || need <= 0) {
        throw new Error(`Cantidad inválida para: ${it.title ?? prodId}`);
      }
      if (!Number.isFinite(currentStock)) {
        throw new Error(`Stock inválido en BD para: ${it.title ?? prodId}`);
      }
      if (currentStock < need) {
        throw new Error(`Sin stock suficiente de ${it.title ?? prodId} (stock: ${currentStock}, pedido: ${need})`);
      }
      if (!Number.isFinite(price) || price < 0) {
        throw new Error(`Precio inválido para: ${it.title ?? prodId}`);
      }

      total += price * need;
      updates.push({ ref: prodRef, newStock: currentStock - need });
    }

    const createdAt = Timestamp.now();

    const orderDoc = {
      buyer: {
        name: String(buyer?.name ?? "").trim(),
        email: String(buyer?.email ?? "").trim(),
        phone: String(buyer?.phone ?? "").trim(),
      },
      items: items.map(it => ({
        id: String(it.id),
        title: String(it.title ?? ""),
        price: Number(it.price ?? 0),
        quantity: Number(it.quantity ?? 0),
      })),
      total,
      status: "created",
      createdAt,
    };

    // Escribimos la orden y descontamos stock dentro de la transacción
    tx.set(orderRef, orderDoc);
    for (const u of updates) {
      tx.update(u.ref, { stock: u.newStock });
    }

    return { orderId: orderRef.id, total, createdAt };
  });
}
