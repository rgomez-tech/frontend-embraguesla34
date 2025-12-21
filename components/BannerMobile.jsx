import "./bannerMobile.css";

export default function BannerMobile() {
  return (
    <section className="banner-mobile">
      <img
        src="/img/banner-ppal-mobile.webp"
        alt="Banner móvil"
        className="banner-mobile__image"
      />

      <div className="banner-mobile__overlay"></div>

      <div className="banner-mobile__content">
        <h1>Embragues la 34</h1>
        <h2>Gilberto Gómez e Hijos</h2>
        <p>Más de 40 años de calidad en nuestros servicios</p>
      </div>
    </section>
  );
}
