import React from "react";
import "../styles/Benefits.scss";

const Benefits = () => {
  return (
    <section className="ac-section ac-benefits">
      <div className="ac-section__header">
        <p className="ac-section__eyebrow">Por qué Astrocloud</p>
        <h2>Un equipo que piensa en el negocio, no solo en el código</h2>
      </div>

      <div className="ac-benefits__grid">
        <div className="ac-metric">
          <span className="ac-metric__number">+10</span>
          <p className="ac-metric__label">proyectos lanzados</p>
        </div>
        <div className="ac-metric">
          <span className="ac-metric__number">24/7</span>
          <p className="ac-metric__label">enfoque en disponibilidad</p>
        </div>
        <div className="ac-metric">
          <span className="ac-metric__number">100%</span>
          <p className="ac-metric__label">comunicación transparente</p>
        </div>
        <div className="ac-metric">
          <span className="ac-metric__number">∞</span>
          <p className="ac-metric__label">iteraciones y mejora continua</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
