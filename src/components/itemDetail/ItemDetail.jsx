import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/format";

export default function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  // Normalización de claves
  const titulo = product.nombre ?? product.title ?? "Producto sin nombre";
  const imgSrc = product.imagen ?? product.image ?? "";
  const desc   = product.descripcion ?? product.description ?? "Sin descripción";
  const price  = product.price ?? 0;

  return (
    <div className="item-detail">
      <img src={imgSrc} alt={titulo} className="item-detail__img" />

      <div className="item-detail__info">
        <h2 className="item-detail__title">{titulo}</h2>
        <p className="item-detail__price">{formatPrice(price)}</p>
        <p className="item-detail__desc">{desc}</p>

        <div className="item-detail__actions">
          <Link to="/productos" className="btn ghost">
            Volver
          </Link>
          <button
            className="btn primary"
            onClick={() => addToCart(product)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
