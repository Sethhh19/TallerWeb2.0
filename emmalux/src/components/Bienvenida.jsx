import { useState } from "react";

export default function Bienvenida() {
  const [visible, setVisible] = useState(true);

  // Si ya se aceptó, no se muestra nada
  if (!visible) return null;

  return (
    <div id="mensajeBienvenida" className="mensaje">
      <div className="mensaje-contenido">
        <h2>¡Bienvenido a EMMALUX!</h2>
        <p>Conoce nuestros productos y soluciones para tus proyectos de muebles y decoración.</p>
        <button id="btnAceptar" onClick={() => setVisible(false)}>Aceptar</button>
      </div>
    </div>
  );
}