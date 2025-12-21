"use client";

import { useState } from "react";
import "./contacto.css";


export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function validate() {
    const e = {};

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(form.nombre))
      e.nombre = "Solo texto permitido";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Correo no válido";

    if (!/^\d+$/.test(form.telefono))
      e.telefono = "Solo números";

    if (form.empresa && !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ0-9\s]+$/.test(form.empresa))
      e.empresa = "Caracteres no permitidos";

    if (!/^[a-zA-Z0-9\s.,]+$/.test(form.mensaje))
      e.mensaje = "Caracteres no permitidos";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    formData.append("_wpcf7", "10");
    formData.append("_wpcf7_version", "5.9");
    formData.append("_wpcf7_locale", "es_ES");
    formData.append("_wpcf7_unit_tag", "wpcf7-f24-p0-o1");
    formData.append("_wpcf7_container_post", "0");

    formData.append("text-533", form.nombre);
    formData.append("email-908", form.email);
    formData.append("tel-93", form.telefono);
    formData.append("text-55", form.empresa);
    formData.append("textarea-533", form.mensaje);

    const res = await fetch(
      "https://tech.embraguesla34.com/wp-json/contact-form-7/v1/contact-forms/10/feedback",
      {
        method: "POST",
        body: formData,
      }
    );




    const data = await res.json();

    if (data.status === "mail_sent") {
      setStatus("Mensaje enviado correctamente");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
    } else {
      setStatus("Error al enviar el mensaje");
    }
  } 


  return (
    <main className="contacto">
      <h1 className="contacto__title">Contáctanos</h1>

      <section className="contacto__grid">
        <div className="contacto__box">
            <div className="cont-text">
                <h2>Envíanos tu mensaje</h2>
                <hr />
                <p>Estamos aquí para ayudarte con soluciones confiables y atención personalizada. <br/>¡Contáctanos ahora!</p>
            </div>             
            <div className="cont-formulario">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={form.nombre}
                        onChange={e => setForm({ ...form, nombre: e.target.value })}
                    />
                    {errors.nombre && <small>{errors.nombre}</small>}

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <small>{errors.email}</small>}

                    <input
                        type="tel"
                        placeholder="Teléfono"
                        value={form.telefono}
                        onChange={e => setForm({ ...form, telefono: e.target.value })}
                    />
                    {errors.telefono && <small>{errors.telefono}</small>}

                    <input
                        type="text"
                        placeholder="Empresa (opcional)"
                        value={form.empresa}
                        onChange={e => setForm({ ...form, empresa: e.target.value })}
                    />
                    {errors.empresa && <small>{errors.empresa}</small>}

                    <textarea
                        placeholder="Mensaje"
                        value={form.mensaje}
                        onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    />
                    {errors.mensaje && <small>{errors.mensaje}</small>}

                    <button type="submit">Enviar</button>

                    {status && <p className="status">{status}</p>}
                </form>
            </div>
        </div>
      </section>
      <section className="content-map">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4724.105504704683!2d-76.51259113549042!3d3.456340376565582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a64f12b0de5b%3A0x46c8cf86fab7e441!2sCl.%2034%20%237-10%2C%20Comuna%208%2C%20Cali%2C%20Valle%20del%20Cauca!5e1!3m2!1sen!2sco!4v1728129390275!5m2!1sen!2sco"></iframe>
      </section>
    </main>    
  );
}
