import "./nosotros.css";


export default function NosotrosPage() {
  return (
    <main className="nosotros">
      <div className="contenedor-titulo">
        <h1 className="nosotros__title">¿Quienes somos?</h1>
      </div>


      <section className="nosotros__grid">
        <div className="nosotros__box">
          <h2>Embragues la 34</h2>

          <p>Somos líderes en la reparación, reconstrucción y comercialización de embragues para camiones, vehículos diésel y maquinaria agrícola. 
            Somos una empresa sólida, con más de 40 años de experiencia, reconocida en el Valle del Cauca por nuestro compromiso, calidad y servicio 
            técnico especializado.
            Desde nuestros inicios, hemos trabajado con un solo objetivo: ofrecer soluciones confiables que mantengan su vehículo trabajando 
            y no detenido en el taller.</p> 
        </div>

        <div className="nosotros__box2">
            <h2>Su fundador</h2>
            <div className="content">
              <div className="cont-text">
                    <p>Embragues La 34 nace del ingenio, la disciplina y el trabajo incansable de <b>Gilberto Gómez</b>, quien fundó la empresa a comienzos 
                    de los años (fecha).
                    Sus primeros pasos no fueron en un gran taller, sino en la práctica diaria y la creatividad: desarmaba prensas de clutch 
                    utilizando una máquina diseñada y construida por él mismo, y entregaba sus trabajos recorriendo la ciudad en una bicicleta de carga. 
                    Cada embrague reparado era una promesa cumplida y una reputación que empezaba a crecer.
                    Con el paso del tiempo, la calidad de su trabajo y la seriedad en el servicio le permitieron consolidar una base sólida de clientes. 
                    Así surgió la oportunidad de abrir su propio taller, invertir en maquinaria especializada y ampliar su capacidad operativa. La confianza 
                    ganada lo llevó a trabajar tanto con clientes particulares como con empresas reconocidas del sector, entre ellas: (nombres de las empresas).
                    Hoy, Embragues La 34 es una empresa especialista en sistemas de embrague para vehículos de carga, respaldada por más de 40 años 
                    de experiencia, conocimiento técnico acumulado y una filosofía clara: hacer el trabajo bien hecho, como desde el primer día.
                    Más que un taller, somos el resultado de una historia de esfuerzo, constancia y pasión por la mecánica.
                  </p>
              </div>            
              <div className="cont-img2">
                  <img src="/img/gilberto-gomez.jpg" alt="Gilberto Gómez fundador de Embragues la 34" />
              </div> 
            </div>
        </div>
        </section>
    </main>    
  );
}