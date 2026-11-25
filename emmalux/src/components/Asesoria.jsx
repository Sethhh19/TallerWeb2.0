import { useState } from "react";

const tarjetas = [
  { imagen: "/imagenes-vectoriales/bisagras.svg", titulo: "Bisagras", texto: "Soluciones para la apertura y cierre de puertas de muebles." },
  { imagen: "/imagenes-vectoriales/corredora.svg", titulo: "Correderas", texto: "Sistemas para el desplazamiento suave de cajones." },
  { imagen: "/imagenes-vectoriales/cierre.svg", titulo: "Manijas y herrajes", texto: "Dale un mejor acabado a tus muebles con nuestros accesorios." },
];

const recomendaciones = {
  puerta: { imagen: "/imagenes-vectoriales/bisagras.svg", alt: "Bisagras para muebles", texto: "Te recomendamos las bisagras, ya que permiten abrir y cerrar las puertas de tus muebles." },
  cajon: { imagen: "/imagenes-vectoriales/corredora.svg", alt: "Correderas para muebles", texto: "Te recomendamos las correderas, porque permiten que los cajones se deslicen correctamente." },
  acabado: { imagen: "/imagenes-vectoriales/cierre.svg", alt: "Manijas y herrajes", texto: "Te recomendamos las manijas y herrajes, ideales para mejorar el acabado y la apariencia de tus muebles." },
};

export default function Asesoria() {
  const [necesidad, setNecesidad] = useState("");
  const [resultado, setResultado] = useState(null);

  function verRecomendacion(evento) {
    evento.preventDefault();
    setResultado(recomendaciones[necesidad]);
  }

  return (
    <section id="asesoria-emmalux" className="asesoria-seccion">
      <div className="asesoria-contenedor">
        <div className="asesoria-encabezado">
          <span className="asesoria-etiqueta">ATENCIÓN PERSONALIZADA</span>
          <h2>¿Necesitas ayuda para elegir tus productos?</h2>
          <p>Te ayudamos a encontrar los herrajes y accesorios adecuados para tus muebles y proyectos.</p>
        </div>
      </div>

      <div className="asesoria-productos">
        {tarjetas.map((t) => (
          <article className="asesoria-tarjeta" key={t.titulo}>
            <div className="asesoria-imagen">
              <img src={t.imagen} alt={t.titulo} />
            </div>
            <h3>{t.titulo}</h3>
            <p>{t.texto}</p>
            <button className="asesoria-boton" type="button">Consultar producto</button>
          </article>
        ))}
      </div>

      <div className="asesoria-recomendacion">
        <h3>¿No sabes qué producto necesitas?</h3>
        <p>Selecciona la parte de tu mueble que deseas mejorar y te mostraremos una recomendación.</p>

        <form id="asesoria-formulario" onSubmit={verRecomendacion}>
          <label htmlFor="asesoria-necesidad">¿Qué parte de tu mueble necesitas mejorar?</label>
          <select id="asesoria-necesidad" required value={necesidad} onChange={(e) => setNecesidad(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="puerta">Puertas</option>
            <option value="cajon">Cajones</option>
            <option value="acabado">Acabados</option>
          </select>
          <button type="submit" className="asesoria-boton">Ver recomendación</button>
        </form>

        <div id="asesoria-resultado" className={resultado ? "asesoria-resultado-visible" : ""}>
          {resultado && (
            <>
              <img src={resultado.imagen} alt={resultado.alt} />
              <p>{resultado.texto}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}