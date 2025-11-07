import React from "react";
import "../styles/Hero.scss";
import Reveal from "./Reveal";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="ac-hero">
      <Reveal className="ac-hero__content" variant="left">
        <p className="ac-hero__eyebrow">Desarrollo · Infraestructura · Nube</p>

        <h1 className="ac-hero__title">
          Desarrolla tu
          <span>Universo Digital</span>
        </h1>

        <p className="ac-hero__subtitle">
          En Astrocloud diseñamos, construimos y desplegamos software a la medida
          de tu negocio. Convertimos ideas en productos digitales listos para
          escalar en la nube.
        </p>

        <div className="ac-hero__actions">
          <button
            type="button"
            className="ac-hero__btn ac-hero__btn--primary"
            onClick={() => scrollToSection("contact")}
          >
            Agendar llamada
          </button>
          <button
            type="button"
            className="ac-hero__btn ac-hero__btn--ghost"
            onClick={() => scrollToSection("services")}
          >
            Ver servicios
          </button>
        </div>

        <p className="ac-hero__note">
          Desde la idea hasta el despliegue en la nube, sin dolores de cabeza
          técnicos.
        </p>
      </Reveal>


    </section>
  );
};

export default Hero;
