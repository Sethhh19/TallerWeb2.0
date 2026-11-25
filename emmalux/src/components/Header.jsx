import { useState } from "react";

export default function Header() {
  // true = menú abierto (en celular)
  const [abierto, setAbierto] = useState(false);

  const cerrarMenu = () => setAbierto(false);

  return (
    <header className="header">
      <div className="header-contenedor">
        <a href="#nosotros" className="logo">
          <img src="/imagenes/emmalux.svg" alt="Logo EMMALUX" />
        </a>

        <button
          className={abierto ? "menu-toggle is-active" : "menu-toggle"}
          aria-expanded={abierto}
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={abierto ? "nav-menu is-active" : "nav-menu"}>
          <a href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
          <a href="#catalogo" onClick={cerrarMenu}>Catálogo</a>
          <a href="#asesoria-emmalux" onClick={cerrarMenu}>Asesoría</a>
          <a href="#opinion" onClick={cerrarMenu}>Opinión</a>
          <a href="https://api.whatsapp.com/send?phone=%2B51933155780" className="btn-cotizar" target="_blank" rel="noreferrer">
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}