import React, { useState } from "react";
import "../styles/Contact.scss";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

// 🔐 Lo ideal es mover esto a variables de entorno después
const SERVICE_ID = "service_m9w7wwm";
const TEMPLATE_ID = "template_cbnm93f";
const PUBLIC_KEY = "f3miXzQ6E7d-ctWBE";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Por favor completa todos los campos.",
      });
      return;
    }

    setIsSending(true);
    setStatus(null);

    // 👇 Estos nombres deben coincidir con las variables del template en EmailJS
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({
        type: "success",
        message:
          "Gracias, hemos recibido tu mensaje. Nos pondremos en contacto contigo muy pronto.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo con EmailJS:", error);
      setStatus({
        type: "error",
        message:
          "Ocurrió un problema al enviar tu mensaje. Intenta de nuevo en unos momentos.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="ac-section ac-contact">
      <div className="ac-contact__content">
        <Reveal variant="left">
          <div className="ac-contact__copy">
            <p className="ac-section__eyebrow">Contacto</p>
            <h2>¿Listo para lanzar tu próximo proyecto?</h2>
            <p>
              Cuéntanos qué estás imaginando y te ayudamos a aterrizarlo en un
              roadmap claro, con tiempos y alcances definidos.
            </p>
          </div>
        </Reveal>

        <Reveal variant="up">
          <form className="ac-contact__form" onSubmit={handleSubmit}>
            <div className="ac-input">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="ac-input">
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tunombre@empresa.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="ac-input">
              <label htmlFor="message">¿En qué podemos ayudarte?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Cuéntanos un poco de tu idea o proyecto"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status && (
              <p
                className={`ac-contact__status ac-contact__status--${status.type}`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
