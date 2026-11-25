export default function ModalProducto({ producto, onCerrar }) {
  if (!producto) return null;

  // Entrada y salida: confirm, prompt y alert
  function cotizar() {
    const quiere = confirm("¿Deseas cotizar este producto?");
    if (quiere) {
      const nombre = prompt("¿Cuál es tu nombre?");
      alert("Gracias " + nombre + ", te contactaremos pronto.");
    }
  }

  return (
    <div className="modal" id="modal" style={{ display: "flex" }}>
      <div className="modal-contenido">
        <button className="cerrar" onClick={onCerrar}>×</button>
        <img src={producto.imagen} alt={producto.titulo} />
        <h3>{producto.titulo}</h3>
        <p>{producto.descripcion}</p>
        <button className="cotizar" onClick={cotizar}>Cotizar</button>
      </div>
    </div>
  );
}