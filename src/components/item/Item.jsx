import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/format";

function Item({ product }) {
  const { cart, addToCart } = useContext(CartContext);

  const titulo = product.nombre ?? product.title ?? "Producto";
  const imgSrc = product.imagen ?? product.image ?? "";
  const desc   = product.descripcion ?? product.description ?? "";
  const price  = product.price;
  const inCartQty = cart.find(it => it.id === product.id)?.quantity ?? 0;
  const remaining = Math.max(Number(product.stock ?? 0) - inCartQty, 0);
  
  return (
    <div className="item-card">
      <img
        src={imgSrc}
        alt={titulo}
        className="item-image"
        style={{ display: "block", width: "100%", height: "auto" }}
        onError={(e) => {
          e.currentTarget.style.outline = "2px solid red";
          e.currentTarget.alt = "Imagen no encontrada";
        }}
      />

      <h3>{titulo}</h3>

      {desc && (
        <>
          <p className="line-clamp-4">{desc}</p>
          <Link to={`/item/${product.id}`} className="ver-mas">Ver más</Link>
        </>
      )}

     
      {typeof price !== "undefined" && (
        <div className="price">{formatPrice(price)}</div>
      )}
      {typeof product.stock !== "undefined" && (
        <p style={{ opacity: 0.8, fontSize: 14 }}>
          En stock: {remaining} {remaining === 0 ? "(sin stock)" : ""}
        </p>
      )}

      <div className="item-actions">
        
        <button
          className="btn primary"
          onClick={() => addToCart(product)}
          disabled={remaining <= 0}
        >
          Añadir Producto
        </button>
      </div>
    </div>
  );
}

export default Item;
