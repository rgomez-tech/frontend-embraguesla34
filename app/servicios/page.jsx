import "./servicios.css";


export default function ServiciosPage() {
  return (
    <main className="servicios">
      <h1 className="servicios__title">Nuestros Servicios</h1>

      <section className="servicios__grid">
        <div className="servicios__box">
            <div className="cont-img1">
                <img src="/img/servicio1.webp" alt="Reparación de embragues" />
            </div>
            <div className="cont-text">
                <h2>Venta y reparación de embragues</h2>
                <hr />
                <p>Vendemos, reparamos y damos mantenimiento a todo tipo de prensas y discos de clutch para camoniones y maquinaria agrícola.</p>
            </div>  
        </div>

        <div className="servicios__box2">
            <div className="cont-text">
                <h2>Remachamos discos</h2>
                <hr />
                <p>En embragues la 34 remachamos toda clase de discos de clutch en pasta de asbesto o tacos de bronce.</p>
            </div>            
            <div className="cont-img2">
                <img src="/img/servicio2.webp" alt="Reparación de embragues" />
            </div> 
        </div>

        <div className="servicios__box">
            <div className="cont-img1">
                <img src="/img/servicio3.webp" alt="Reparación de embragues" />
            </div>
            <div className="cont-text">
                <h2>Rectificamos volantes</h2>
                <hr />
                <p>Cepillamos y rectificamos todo tipo de volantes motor.</p>
            </div> 
        </div>
      </section>

      <section className="domicilio">
        <div className="slide-in">   
          <div className="slide-in-text">Servicio a domicilio en la ciudad de Cali</div>
          <img src="/img/furgoneta.webp" width="150px" height="150px"/>
        </div>
      </section>

      <section className="productos">
        <h2>¡Trabajamos con estos repuestos y más!</h2>
        <div className="tipo-producto">
          <img src="/img/embrague1.webp" alt="embragues la 34" />
          <img src="/img/embrague2.webp" alt="embragues la 34" />
          <img src="/img/embrague3.webp" alt="embragues la 34" />
          <img src="/img/embrague4.webp" alt="embragues la 34" />
          <img src="/img/embrague5.webp" alt="embragues la 34" />
          <img src="/img/embrague6.webp" alt="embragues la 34" />
          <img src="/img/embrague7.webp" alt="embragues la 34" />
          <img src="/img/embrague8.webp" alt="embragues la 34" />
          <img src="/img/embrague9.webp" alt="embragues la 34" />
          <img src="/img/embrague10.webp" alt="embragues la 34" />
          <img src="/img/embrague11.webp" alt="embragues la 34" />
          <img src="/img/embrague12.webp" alt="embragues la 34" />
          <img src="/img/embrague13.webp" alt="embragues la 34" />
          <img src="/img/embrague14.webp" alt="embragues la 34" />
        </div>
      </section>
    </main>    
  );
}
