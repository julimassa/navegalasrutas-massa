import { useEffect } from "react";
import { Link } from "react-router-dom";
import app from "../services/firebase";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  useEffect(() => {
    console.log("Firebase conectado a:", app?.options?.projectId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <main className="home">
      <section className="hero">
        <Slider {...settings}>
          <div>
            <div
              className="hero__slide"
              style={{ backgroundImage: "url(/img/banner1.JPG)" }}
            >
              <div className="hero__inner">
                <h1>Braixa</h1>
                <p>Cintos artesanales — militares y de diseño</p>
                <Link to="/productos" className="btn primary">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              className="hero__slide"
              style={{ backgroundImage: "url(/img/tommy.jpg)" }}
            >
              <div className="hero__inner">
                <h1>Nueva colección</h1>
                <p>Modelos exclusivos de la temporada</p>
                <Link to="/productos" className="btn primary">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              className="hero__slide"
              style={{ backgroundImage: "url(/img/americano-externo-hebilla.png)" }}
            >
              <div className="hero__inner">
                <h1>Hechos a mano</h1>
                <p>Calidad y diseño en cada detalle</p>
                <Link to="/productos" className="btn primary">
                  Comprar ahora
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="home-cats">
        <Link to="/category/militares" className="cat-card">
          <img src="/img/foto-1.jpg" alt="Cintos Militares" />
          <span className="cat-card__label">Cintos Militares</span>
        </Link>

        <Link to="/category/diseno" className="cat-card">
          <img src="/img/surtido.jpg" alt="Cintos de Diseño" />
          <span className="cat-card__label">Cintos de Diseño</span>
        </Link>
      </section>
    </main>
  );
}
