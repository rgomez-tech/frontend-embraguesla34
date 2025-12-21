import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ubicacion ubicacion-mobile">
          <div className="ubi-contentenido"> 
              <h2>Ubicación</h2>
              <img src="/img/icono-ubicacion.png" alt="icono" />
              <p>
                Calle 34 No. 7-10 Barrio: Industrial<br/>
                Cali - Colombia<br/>
                Teléfono: 316 740 3090<br/>
                318 489 6553<br/>
                317 222 4874<br/>
                E-mail: embraguesla34@hotmail.com
              </p>
              <p>
                Lunes a viernes de 7:30am a 5:30pm<br/>
                Sábados de 7:30 am a 01:00pm
              </p>
          </div>
      </div>

      {/* Fila 1 */}
      <div className="footer__top">
        <div className="footer__col1">
          <img src="/img/logo-embraguesla34.webp" alt="Logo" className="footer__logo" />
        </div>

        <div className="footer__col2">
          <h3>Contáctanos</h3>
          <hr></hr>
          <p>
            Teléfonos: 
            <br/>
            316 740 3090
            <br/>
            318 489 6553
            <br/>
            317 222 4874
            <br/><br/>
            Email:
            <br/>
            embraguesla34@hotmail.com
          </p>
        </div>

        <div className="footer__col2">
          <h3>Ubícanos</h3>
          <hr></hr>
          <p>
            Dirección:
            <br/>
            Calle 34 # 7-10 
            <br/><br/>
            Barrio:
            <br/>
            Industrial
            <br/>
            Cali | Colombia.
          </p>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="footer__bottom">
        ©2026 Embragues la 34 – Todos los derechos reservados.
      </div>
    </footer>
  );
}
