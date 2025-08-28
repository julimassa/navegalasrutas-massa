
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);


  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 3) }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const incQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min((item.quantity ?? 0) + 1, 3) }
          : item
      )
    );
  };

 
  const decQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max((item.quantity ?? 0) - 1, 0) }
            : item
        )
        .filter((item) => (item.quantity ?? 0) > 0)
    );
  };

 
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity ?? 0), 0);


  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price ?? 0) * (item.quantity ?? 0),
    0
  );

  
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    incQty,
    decQty,
    totalQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
