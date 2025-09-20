import { db } from "./firebase";
import { collection, doc, runTransaction, Timestamp } from "firebase/firestore";

export async function createOrderAndDecrementStock({ buyer, items }) {
  const ordersCol = collection(db, "orders");
  const orderRef = doc(ordersCol); // crea ID nuevo

  await runTransaction(db, async (tx) => {
    // 1) Leer TODO antes de escribir
    const productStates = []; // [{ ref, title, current, need }]
    for (const it of items) {
      const ref = doc(db, "products", it.id);
      const snap = await tx.get(ref);              // ← SOLO LEEMOS ACÁ
      if (!snap.exists()) {
        throw new Error(`Producto no existe: ${it.title}`);
      }
      const data = snap.data();
      const current = Number(data.stock ?? 0);
      const need = Number(it.quantity ?? 0);
      if (need <= 0) continue;

      if (current < need) {
        throw new Error(`Sin stock: ${data.title ?? it.title} (disp: ${current}, pide: ${need})`);
      }
      productStates.push({ ref, title: data.title ?? it.title, current, need });
    }

    // 2) Escribir (sin más lecturas)
    for (const p of productStates) {
      tx.update(p.ref, { stock: p.current - p.need });
    }

    // 3) Crear la orden
    const total = items.reduce(
      (acc, it) => acc + Number(it.price ?? 0) * Number(it.quantity ?? 0),
      0
    );
    tx.set(orderRef, {
      buyer,
      items,
      total,
      createdAt: Timestamp.now(),
    });
  });

  return orderRef.id;
}
