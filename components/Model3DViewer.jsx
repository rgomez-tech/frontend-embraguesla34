"use client";

import ModelViewer from "@/components/ModelViewerClient";
import "./Model3DViewer.css";

export default function SectionModelos3D() {
  return (
    <section >
      <div className="two-cols">
        <div className="column">
          <h3>Ingeniería y precisión en cada componente</h3>
          <p>El clutch es una pieza crítica del sistema de transmisión.
            Un ajuste incorrecto genera vibraciones, desgaste prematuro y pérdida de potencia.
            Nuestro servicio incluye revisión técnica, empastado profesional y cepillado de volante, asegurando un contacto uniforme y 
            una transmisión eficiente del torque.</p>
        </div>
        <div className="column">
          <ModelViewer
            src="/model3d/clutch_prensa.glb"
            auto-rotate
            camera-controls
            loading="lazy"
            exposure="1.2"
            className="modelo-3d"
            ar
          />
          <p>Interactúa con el modelo 3D</p>
        </div>
      </div>
      <div className="two-cols">
        <div className="column">
          <ModelViewer
            src="/model3d/clutch_disco.glb"
            auto-rotate
            camera-controls
            loading="lazy"
            exposure="1.2"
            className="modelo-3d"
            ar
          />
          <p>Interactúa con el modelo 3D</p>
        </div>        
        <div className="column">        
        <h3>Alto desempeño para trabajo pesado</h3>
          <p>Nuestros sistemas de embrague están diseñados para soportar altas cargas, uso continuo y condiciones exigentes.
            Reparamos, empastamos y ajustamos componentes para garantizar acoplamiento preciso, mayor durabilidad y respuesta confiable en cada cambio.
            Trabajamos con materiales certificados y procesos técnicos que prolongan la vida útil del clutch y reducen costos de mantenimiento.</p>
        </div>
      </div>
    </section>
    
  );
}
