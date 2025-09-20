import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../cart/CartWidget";

function NavBar() {
  const { pathname } = useLocation();

  // Si la ruta empieza con /productos, /category o /item, es parte del catálogo
  const isCatalogRoute =
    pathname.startsWith("/productos") ||
    pathname.startsWith("/category") ||
    pathname.startsWith("/item");

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
          {/* Usamos Link normal pero le damos clase active si estamos en catálogo */}
          <Link to="/productos" className={isCatalogRoute ? "active" : ""}>
            Productos
          </Link>
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
