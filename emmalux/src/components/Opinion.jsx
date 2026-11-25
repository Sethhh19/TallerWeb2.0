import { useEffect, useState } from "react";

const vacio = { nombre: "", correo: "", calificacion: "", tema: "", comentario: "" };

// Mismas reglas de validación que en script.js
const reglas = {
  nombre: { mensaje: "Escribe tu nombre.", valida: (v) => v.trim().length >= 2 },
  correo: { mensaje: "Escribe un correo válido.", valida: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
  calificacion: { mensaje: "Elige una calificación.", valida: (v) => v !== "" },
  tema: { mensaje: "Elige un tema.", valida: (v) => v !== "" },
  comentario: { mensaje: "Cuéntanos un poco más (mínimo 10 caracteres).", valida: (v) => v.trim().length >= 10 },
};

export default function Opinion() {
  const [datos, setDatos] = useState(vacio);
  const [errores, setErrores] = useState({});
  const [aviso, setAviso] = useState(null); // nombre de quien envió, o null

  // Cerrar el aviso con la tecla Escape
  useEffect(() => {
    const alPresionar = (e) => { if (e.key === "Escape") setAviso(null); };
    document.addEventListener("keydown", alPresionar);
    return () => document.removeEventListener("keydown", alPresionar);
  }, []);

  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor });
    setErrores({ ...errores, [campo]: "" });
  }

  function enviar(e) {
    e.preventDefault();
    const nuevos = {};
    for (const campo in reglas) {
      if (!reglas[campo].valida(datos[campo])) nuevos[campo] = reglas[campo].mensaje;
    }
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;

    setAviso(datos.nombre.trim());
    setDatos(vacio);
  }

  // Props comunes de cada campo
  const campo = (nombre) => ({
    value: datos[nombre],
    onChange: (e) => cambiar(nombre, e.target.value),
    className: errores[nombre] ? "opinion-invalido" : "",
  });

  return (
    <>
      <section id="opinion" className="opinion-seccion">
        <div className="opinion-contenedor">
          <div className="opinion-encabezado">
            <span className="opinion-etiqueta">TU OPINIÓN IMPORTA</span>
            <h2>Ayúdanos a mejorar</h2>
            <p>Cuéntanos cómo fue tu experiencia en nuestra página.</p>
          </div>

          <form className="opinion-formulario" noValidate onSubmit={enviar}>
            <div className="opinion-fila">
              <div className="opinion-campo">
                <label htmlFor="opNombre">Nombre</label>
                <input type="text" id="opNombre" placeholder="Tu nombre" {...campo("nombre")} />
                <small className="opinion-error">{errores.nombre}</small>
              </div>
              <div className="opinion-campo">
                <label htmlFor="opCorreo">Correo electrónico</label>
                <input type="email" id="opCorreo" placeholder="tucorreo@ejemplo.com" {...campo("correo")} />
                <small className="opinion-error">{errores.correo}</small>
              </div>
            </div>

            <div className="opinion-fila">
              <div className="opinion-campo">
                <label htmlFor="opCalificacion">¿Cómo calificas tu experiencia?</label>
                <select id="opCalificacion" {...campo("calificacion")}>
                  <option value="">Selecciona una opción</option>
                  <option value="5">5 - Excelente</option>
                  <option value="4">4 - Muy buena</option>
                  <option value="3">3 - Regular</option>
                  <option value="2">2 - Mala</option>
                  <option value="1">1 - Muy mala</option>
                </select>
                <small className="opinion-error">{errores.calificacion}</small>
              </div>
              <div className="opinion-campo">
                <label htmlFor="opTema">¿Sobre qué quieres opinar?</label>
                <select id="opTema" {...campo("tema")}>
                  <option value="">Selecciona un tema</option>
                  <option value="catalogo">Catálogo de productos</option>
                  <option value="buscador">Buscador</option>
                  <option value="diseno">Diseño de la página</option>
                  <option value="atencion">Atención y cotización</option>
                  <option value="otro">Otro</option>
                </select>
                <small className="opinion-error">{errores.tema}</small>
              </div>
            </div>

            <div className="opinion-campo">
              <label htmlFor="opComentario">Tu comentario</label>
              <textarea id="opComentario" rows="4" placeholder="¿Qué podemos mejorar?" {...campo("comentario")} />
              <small className="opinion-error">{errores.comentario}</small>
            </div>

            <button type="submit" className="opinion-boton">Enviar opinión</button>
          </form>
        </div>
      </section>

      <div className="opinion-aviso" hidden={aviso === null} onClick={(e) => { if (e.target === e.currentTarget) setAviso(null); }}>
        <div className="opinion-aviso-caja">
          <h3>¡Gracias por tus comentarios!</h3>
          <p>Gracias, {aviso}. Tu opinión nos ayuda a mejorar.</p>
          <button type="button" className="opinion-boton" onClick={() => setAviso(null)}>Cerrar</button>
        </div>
      </div>
    </>
  );
}