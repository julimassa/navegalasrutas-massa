import { ShoppingCart } from "lucide-react"; 
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <ShoppingCart size={28} />
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;

