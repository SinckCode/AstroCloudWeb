import React from "react";
import "../styles/Portfolio.scss";
import Reveal from "./Reveal";

const Portfolio = () => {
  return (
    <section id="portfolio" className="ac-section ac-portfolio">
      <Reveal>
        <div className="ac-section__header">
          <p className="ac-section__eyebrow">Casos de uso</p>
          <h2>Lo que podemos construir juntos</h2>
          <p className="ac-section__subtitle">
            Desde el diseño de la interfaz hasta el backend, la infraestructura y el despliegue en la nube.
          </p>
        </div>

        <div className="ac-portfolio__grid">
          {/* Paneles de administración */}
          <article className="ac-card ac-card--case">
            <h3>Paneles de administración y dashboards</h3>
            <p>
              Gestión de clientes, ventas, inventarios, accesos o métricas de negocio en un solo lugar.
              Interfaces limpias, filtros, reportes y vistas pensadas para el día a día de tu equipo.
            </p>
          </article>

          {/* Portales web */}
          <article className="ac-card ac-card--case">
            <h3>Portales web y sitios para tu marca</h3>
            <p>
              Sitios institucionales, landing pages y blogs optimizados para SEO.
              Diseñamos la experiencia, maquetamos en React y lo dejamos listo para recibir clientes.
            </p>
          </article>

          {/* Sistemas internos conectados a APIs */}
          <article className="ac-card ac-card--case">
            <h3>Sistemas internos conectados a APIs</h3>
            <p>
              Desarrollo de APIs y microservicios en Node, FastAPI o Vapor,
              integrados con CRMs, ERPs o servicios de terceros para automatizar procesos y reducir tareas manuales.
            </p>
          </article>

          {/* Apps móviles y de escritorio */}
          <article className="ac-card ac-card--case">
            <h3>Apps móviles y de escritorio</h3>
            <p>
              Aplicaciones en Android (Kotlin / Jetpack Compose), MAUI y SwiftUI
              para llevar tus servicios a móviles, tablets o escritorio, con autenticación, catálogos y notificaciones.
            </p>
          </article>

          {/* IoT y control de accesos */}
          <article className="ac-card ac-card--case">
            <h3>IoT, control de accesos y hardware</h3>
            <p>
              Sistemas que conectan hardware con software: ESP32, RFID, sensores,
              dashboards para monitorear accesos, estacionamientos o dispositivos en tiempo real.
            </p>
          </article>

          {/* Infraestructura y despliegue */}
          <article className="ac-card ac-card--case">
            <h3>Infraestructura, nube y despliegue</h3>
            <p>
              Configuración de servidores, Docker y CI/CD. Despliegues en Firebase, DigitalOcean,
              Proxmox o servidores propios, con dominios, certificados SSL y monitoreo básico.
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
};

export default Portfolio;
