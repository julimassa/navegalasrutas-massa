import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import "../../pages/CartPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice, incQty, decQty } = useContext(CartContext);

  const itemsCount = useMemo(
    () => cart.reduce((acc, it) => acc + (it.quantity ?? 0), 0),
    [cart]
  );

  const navigate = useNavigate();

  const handleClear = () => {
  clearCart();
  navigate("/");              
};
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1 className="cart-title">Carrito</h1>
            <span className="cart-meta">0 ítem(s)</span>
          </div>
          <div className="cart-empty">
            <div className="cart-empty__icon">🛒</div>
            Tu carrito está vacío.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1 className="cart-title">Carrito</h1>
          <span className="cart-meta">{itemsCount} ítem(s)</span>
        </div>

        
        <div className="cart-grid">
          {cart.map((item) => {
            const nombre = item.nombre ?? item.name ?? "Producto";
            const imagen =
              item.img ?? item.imagen ?? item.image ?? item.url ?? "";
            const precio = Number(item.price ?? 0);
            const qty = Number(item.quantity ?? 0);
            const subtotal = precio * qty;
            const restante = Math.max(Number(item.stock ?? 0) - qty, 0);


            return (
              <article className="cart-card-item" key={item.id}>
                <div className="cart-card-item__media">
                  <img
                    className="cart-card-item__img"
                    src={imagen}
                    alt={nombre}
                  />
                </div>

                <div className="cart-card-item__body">
                  <h3 className="cart-name">{nombre}</h3>
                  <div className="cart-price">{formatPrice(precio)}</div>
                  <div style={{ opacity: 0.7, fontSize: 14 }}>
                    Stock restante: {restante}
                  </div>
                </div>

                <div className="cart-card-item__footer">
                  <div className="item-actions">
                    
                  <div className="qty">
                    <button
                      className="qty__btn"
                      aria-label="Restar"
                      onClick={() => decQty(item.id)}
                      disabled={qty <= 0}
                    >
                      -
                    </button>

                    <span className="qty__value">{qty}</span>

                    <button
                      className="qty__btn"
                      aria-label="Sumar"
                      onClick={() => incQty(item.id)}
                      disabled={qty >= Number(item.stock ?? 0)}   
                    >
                      +
                    </button>
                  </div>


                    <button
                      className="btn-link danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="subtotal">Subtotal: {formatPrice(subtotal)}</div>
                </div>
              </article>
            );
          })}
        </div>

        
        <div className="cart-summary">
          <div className="summary-line">
            <span>Items</span>
            <span>{itemsCount}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>

          <div className="cart-actions">
            <button className="btn danger" onClick={handleClear}>
              Vaciar carrito
            </button>

            {cart.length > 0 && (
              <Link to="/checkout" className="btn primary">
                Finalizar compra
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
