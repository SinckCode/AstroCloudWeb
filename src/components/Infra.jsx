import React from "react";
import "../styles/Infra.scss";
import Reveal from "./Reveal";

const Infra = () => {
  return (
    <section id="infra" className="ac-section ac-infra">
      <Reveal>
      <div className="ac-infra__content">
        <div>
          <p className="ac-section__eyebrow">Infraestructura</p>
          <h2>Infraestructura de software robusta desde el día uno</h2>
          <p>
            Ofrecemos soluciones de software a tu negocio para hacerte la vida
            más sencilla. Con nuestra infraestructura y proceso de desarrollo,
            tu sistema estará listo para crecer sin que tengas que preocuparte
            por caídas, pérdida de datos o configuraciones técnicas.
          </p>
        </div>

        <ul className="ac-infra__list">
          <li>
            <span>●</span> Arquitecturas pensadas para escalar.
          </li>
          <li>
            <span>●</span> Seguridad por diseño en cada capa del sistema.
          </li>
          <li>
            <span>●</span> Monitoreo y alertas para reaccionar a tiempo.
          </li>
          <li>
            <span>●</span> Backups automáticos para cuidar tu información.
          </li>
        </ul>
      </div>
      </Reveal>
    </section>
  );
};

export default Infra;
