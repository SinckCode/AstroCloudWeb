import React, { useState } from "react";
import "../styles/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e) => {
    // si es un link con href="#..."
    if (e.target.tagName === "A") {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const id = href.replace("#", "");
        scrollToSection(id);
        closeMenu();
      }
    }
  };

  const handleContactClick = () => {
    scrollToSection("contact");
    closeMenu();
  };

  return (
    <header className="ac-header">
      <div className="ac-header__logo">Astrocloud</div>

      <nav
        className={`ac-header__nav ${isOpen ? "is-open" : ""}`}
        onClick={handleNavClick}
      >
        <a href="#services">Servicios</a>
        <a href="#process">Proceso</a>
        <a href="#infra">Infraestructura</a>
        <a href="#portfolio">Casos</a>
        <a href="#contact">Contacto</a>

        {/* CTA también accesible dentro del menú en móvil */}
        <button
          type="button"
          className="ac-header__cta ac-header__cta--mobile"
          onClick={handleContactClick}
        >
          Agendar llamada
        </button>
      </nav>

      {/* CTA visible en desktop */}
      <button
        type="button"
        className="ac-header__cta ac-header__cta--desktop"
        onClick={handleContactClick}
      >
        Agendar llamada
      </button>

      {/* Botón hamburguesa */}
      <button
        className={`ac-header__burger ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
