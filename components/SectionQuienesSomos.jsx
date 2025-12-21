// app/components/SectionTwoColumns.jsx

import "./SectionQuienesSomos.css";

export default function SectionQuienesSomos() {
  return (
    <section className="seccion-home">
      <div className="two-cols">
        <div className="two-cols__content">
          <h2>Somos líderes en reparación de embragues</h2>
          <p>
            Somos una empresa sólida, con más de 40 años de experiencia, liderazgo y servicio para todos los vallecaucanos, contamos con un equipo altamente calificado y comprometidos con la calidad de nuestros servicios.
  Compramos, vendemos y reconstruimos toda clase de embragues Diesel y maquinaria agrícola.
          </p>
        </div>

        <div className="two-cols__image">
          <img src="/img/ingeniero1.webp" alt="Ingeniero mecánico de Embragues la 34" />
        </div>
      </div>

      <div className="dos-cols">
        <div className="dos-cols__image">
          <img src="/img/embrague-brigadier.webp" alt="Ingeniero mecánico de Embragues la 34" />
        </div>
        <div className="dos-cols__content">
          <p>
            Especialistas en sistemas de embrague para camiones. Reparamos embragues con precisión técnica, reempastamos discos de clutch 
            para devolverles agarre y durabilidad, y cepillamos volantes motor para garantizar un acople suave, potente y confiable. Combinamos 
            experiencia, maquinaria de alta calidad y procesos estrictos para que tu camión vuelva a la carretera con la fuerza y seguridad que 
            necesita.
          </p>
        </div>
      </div>
    </section>
  );
}
