// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/format";


export default function ProductCard({ p }) {
  const { cart } = useContext(CartContext);
  const inCartQty = cart.find(it => it.id === p.id)?.quantity ?? 0;
  const remaining = Math.max(Number(p.stock ?? 0) - inCartQty, 0);

  return (
    <article
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 12,
        display: "grid",
        gap: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,.05)",
      }}
    >
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10 }}
        />
      )}
      <h3 style={{ margin: 0 }}>{p.title}</h3>
      <p style={{ margin: 0, opacity: 0.8 }}>
        {formatPrice(p.price)} — {p.category}
      </p>
      {typeof p.stock !== "undefined" && (
        <p style={{ margin: 0, opacity: 0.7 }}>
          En stock: {remaining} {remaining === 0 ? "(sin stock)" : ""}
        </p>
      )}
      <Link
        to={`/item/${p.id}`}
        style={{ marginTop: 8, textDecoration: "none", fontWeight: 600 }}
      >
        Ver detalle →
      </Link>
    </article>
  );
}
