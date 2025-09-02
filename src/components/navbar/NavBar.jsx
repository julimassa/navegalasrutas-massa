import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../cart/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/img/logo-braixa-transparente-iloveimg.png" alt="Braixa Logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/productos" className={({ isActive }) => (isActive ? "active" : "")}>
          Productos
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
            Contacto
          </NavLink>
        </li>
      </ul>

      <CartWidget />

    </nav>
  );
}

export default NavBar;
