import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="ac-footer">
      <div className="ac-footer__top">
        <div className="ac-footer__left">
          <div className="ac-footer__logo">Astrocloud</div>
          <p>
            Construimos productos digitales y sistemas en la nube para negocios
            que quieren crecer.
          </p>
        </div>

        <div className="ac-footer__right">
          {/*<div>
            <h4>Contacto</h4>
            <p>contacto@astrocloud.dev</p>
          </div>
            */}
          <div>
            <h4>Enlaces</h4>
            <a href="#services">Servicios</a>
            <a href="#process">Proceso</a>
            <a href="#contact">Hablemos</a>
          </div>
        </div>
      </div>

      <div className="ac-footer__bottom">
        <span>
          © {new Date().getFullYear()} Astrocloud. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
