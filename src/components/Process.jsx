import React from "react";
import "../styles/Process.scss";
import Reveal from "./Reveal";

const Process = () => {
  return (
    <section id="process" className="ac-section ac-process">
      <Reveal>
      <div className="ac-section__header">
        <p className="ac-section__eyebrow">Nuestro proceso</p>
        <h2>Nuestro proceso de desarrollo</h2>
        <p>Escuchar, crear y ponerlo online. Sin complicarte la vida.</p>
      </div>

      <div className="ac-process__steps">
        <div className="ac-step">
          <span className="ac-step__index">01 /</span>
          <h3>Escuchar y diseñar</h3>
          <p>
            Empezamos entendiendo tu negocio: escuchamos tus necesidades,
            analizamos tus procesos y definimos contigo el objetivo del
            proyecto. Diseñamos la experiencia, la arquitectura y el plan.
          </p>
        </div>

        <div className="ac-step">
          <span className="ac-step__index">02 /</span>
          <h3>Crear y construir</h3>
          <p>
            Convertimos el plan en producto: maquetamos interfaces,
            desarrollamos el backend, conectamos la base de datos e
            integramos servicios externos. Te mostramos avances constantes
            para que puedas probar y ajustar.
          </p>
        </div>

        <div className="ac-step">
          <span className="ac-step__index">03 /</span>
          <h3>Ponerlo online y acompañarte</h3>
          <p>
            Desplegamos tu sistema en la nube con buenas prácticas de
            seguridad y rendimiento. Monitoreamos, damos soporte y seguimos
            iterando para que tu software nunca se quede atrás.
          </p>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default Process;
