import { useContext } from "react";
import { Link } from "react-router-dom";           
import "./Item.css";
import { CartContext } from "../../context/CartContext";

function Item({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card">
      <img src={product.imagen} alt={product.nombre} className="item-image" />
      <h3>{product.nombre}</h3>
      {product.descripcion && <p>{product.descripcion}</p>}
      <span>${product.price}</span>

      <div className="item-actions" style={{ display: "flex", gap: 8, marginTop: 8 }}>
       
        <Link to={`/item/${product.id}`} className="btn ghost">
          Ver detalle
        </Link>

        <button className="btn primary" onClick={() => addToCart(product)}>
          Añadir Producto
        </button>
      </div>
    </div>
  );
}

export default Item;
