import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
       
        <div className="footer-brand">
          <img
            src="/img/logo-braixa-transparente-iloveimg.png"
            alt="Braixa"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Cintos artesanales, calidad y diseño.
          </p>
        </div>
        
        <nav className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>            
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li>📧 <a href="mailto:braixa@gmail.com">braixa@gmail.com</a></li>
            <li>📍 Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {year} Braixa. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
}
