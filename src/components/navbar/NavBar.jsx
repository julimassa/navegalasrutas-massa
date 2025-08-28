import React from "react";
import "./NavBar.css";
import CartWidget from "../cart/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo-braixa-transparente-iloveimg.png" alt="Braixa Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
