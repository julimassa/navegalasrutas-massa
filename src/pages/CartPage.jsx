
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="cart-empty">Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} className="cart-img" />
            <div className="cart-details">
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <h3>Total de productos: {totalQuantity}</h3>
        <h2>Total a pagar: ${totalPrice}</h2>
        <button onClick={clearCart} className="btn-clear">Vaciar carrito</button>
        <button className="btn-buy">Finalizar compra</button>
      </div>
    </div>
  );
};

export default CartPage;
