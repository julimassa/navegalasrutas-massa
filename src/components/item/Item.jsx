import { useContext } from "react";
import "./Item.css";
import { CartContext } from "../../context/CartContext";


function Item({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card">
      <img src={product.imagen} alt={product.nombre} className="item-image" />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <span>${product.price}</span>
      <button onClick={() => addToCart(product)}>Añadir Producto</button>
    </div>
  );
}

export default Item;

