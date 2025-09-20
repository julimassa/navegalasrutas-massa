import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

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

  const addToCart = (product, qty = 1) => {
    const max = Number(product?.stock ?? 0);
    if (max <= 0) {
      toast.success("No hay stock disponible de este producto.");
      return;
    }

    setCart((prev) => {
      const idx = prev.findIndex((it) => it.id === product.id);

      if (idx >= 0) {
        const next = [...prev];
        const currentQty = Number(next[idx].quantity ?? 0);
        const newQty = Math.min(currentQty + qty, max);

        next[idx] = { ...next[idx], quantity: newQty, stock: max };

        if (newQty === currentQty) {
          toast.success("Alcanzaste el stock disponible de este producto.");
        }
        return next;
      }

      return [...prev, { ...product, quantity: Math.min(qty, max), stock: max }];
    });
  };

  const incQty = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const max = Number(item.stock ?? 0);
        const nextQty = Math.min(Number(item.quantity ?? 0) + 1, max);
        if (nextQty === item.quantity) {
          toast.success("No hay más stock disponible.");
        }
        return { ...item, quantity: nextQty };
      })
    );
  };

  const decQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(Number(item.quantity ?? 0) - 1, 0) }
            : item
        )
        .filter((item) => (item.quantity ?? 0) > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price ?? 0) * Number(item.quantity ?? 0),
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

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
