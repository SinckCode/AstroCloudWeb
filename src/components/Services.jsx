import React from "react";
import "../styles/Services.scss";
import Reveal from "./Reveal";

const Services = () => {
  return (
    <section id="services" className="ac-section ac-services">
      <Reveal>
      <div className="ac-section__header">
        <p className="ac-section__eyebrow">Qué hacemos</p>
        <h2>Soluciones digitales que crecen con tu negocio</h2>
        <p>
          Ofrecemos soluciones de software a tu negocio para hacerte la vida
          más sencilla. Con nuestro proceso de desarrollo no tendrás que
          preocuparte por detalles técnicos.
        </p>
      </div>

      <div className="ac-services__grid">
        <article className="ac-card">
          <p className="ac-card__tag">01</p>
          <h3>Desarrollo de software a la medida</h3>
          <p>
            Aplicaciones web, paneles administrativos y herramientas internas
            diseñadas para tu forma de trabajar. Nos adaptamos a tu modelo de
            negocio, no al revés.
          </p>
        </article>

        <article className="ac-card">
          <p className="ac-card__tag">02</p>
          <h3>Infraestructura de software robusta</h3>
          <p>
            Arquitecturas seguras, escalables y monitoreadas. Desde servidores
            y bases de datos hasta balanceadores y backups automatizados.
          </p>
        </article>

        <article className="ac-card">
          <p className="ac-card__tag">03</p>
          <h3>Soporte y evolución continua</h3>
          <p>
            No te dejamos solo después del lanzamiento. Damos mantenimiento,
            optimización y nuevas funcionalidades conforme tu negocio crece.
          </p>
        </article>
      </div>
      </Reveal>
    </section>
  );
};

export default Services;
