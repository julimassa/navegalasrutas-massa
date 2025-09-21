import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { createOrderAndDecrementStock } from "../services/orders";
import { formatPrice } from "../utils/format";
import toast from "react-hot-toast";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((b) => ({ ...b, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email) return toast.error("Completá nombre y email");

    try {
      setLoading(true);

      // Normalizamos items del carrito
      const items = cart.map((p) => ({
        id: String(p.id),
        title: String(p.title ?? p.nombre ?? "Producto"),
        price: Number(p.price),
        quantity: Number(p.quantity ?? 1),
      }));

      const { orderId } = await createOrderAndDecrementStock({ buyer, items });

      setOrderId(orderId);
      clearCart();
      toast.success("¡Orden creada!");
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error(err?.message ?? "No se pudo generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <main style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es: <b>{orderId}</b></p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul style={{ marginBottom: 12 }}>
            {cart.map((p) => (
              <li key={p.id}>
                {(p.title ?? p.nombre) || "Producto"} × {p.quantity ?? 1} — {formatPrice(p.price)}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: 700 }}>Total: {formatPrice(totalPrice)}</p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 420 }}>
            <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} required />
            <input name="phone" placeholder="Teléfono (opcional)" value={buyer.phone} onChange={handleChange} />
            <button disabled={loading}>{loading ? "Creando orden..." : "Confirmar compra"}</button>
          </form>
        </>
      )}
    </main>
  );
}
