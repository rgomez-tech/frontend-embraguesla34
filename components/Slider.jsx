"use client";

import { useState, useEffect } from "react";
import "./slider.css";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Embragues la 34",
      subtitle: "Gilberto Gómez e Hijos",
      text: "Más de 40 años de calidad en nuestros servicios",
      bg: "/img/slide1.webp",
    },
    {
      id: 2,
      title: "",
      subtitle: "Vendemos embragues para vehículos pesados con calidad garantizada, precios competitivos y el respaldo de Embragues la 34",
      text: "",
      bg: "/img/slide2.webp",
    },
    {
      id: 3,
      title: "",
      subtitle: "Embragues la 34 te ofrece asesoría especializada, productos de alto rendimiento y entregas rápidas",
      text: "",
      bg: "/img/slide3.webp",
    }
  ];  


  // autoplay cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        > 
          <div className="slide__content">
            <h1>{s.title}</h1>
            <h3>{s.subtitle}</h3>
            <p>{s.text}</p>
          </div>
        </div>
      ))}

      <div className="slider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
