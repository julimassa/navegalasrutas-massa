import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.nombre} x {item.cantidad}</p>
          <p>${item.price * item.cantidad}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
