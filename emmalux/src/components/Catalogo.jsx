import { useState } from "react";
import { categorias } from "../data/productos.js";
import ModalProducto from "./ModalProducto.jsx";

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null); // producto abierto en la ventana

  const texto = busqueda.toLowerCase();

  // Filtra los productos y quita las categorías que quedan vacías
  const categoriasFiltradas = categorias
    .map((cat) => ({
      ...cat,
      productos: cat.productos.filter((p) => p.titulo.toLowerCase().includes(texto)),
    }))
    .filter((cat) => cat.productos.length > 0);

  return (
    <section id="catalogo">
      <div className="encabezado">
        <h1>Nuestro Catálogo</h1>
        <p className="subtitulo">Categorías Principales</p>

        <nav className="menu">
          <a href="#bisagras">Bisagras</a>
          <a href="#corredoras">Corredoras</a>
          <a href="#herrajes">Herrajes</a>
          <a href="#accesorios">Accesorios</a>
        </nav>
      </div>

      <div className="buscador">
        <input
          type="text"
          id="buscador"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <section className="productos">
        {categoriasFiltradas.map((cat) => (
          <div className="categorias" id={cat.id} key={cat.id}>
            <h2>{cat.nombre}</h2>
            <div className="lista-productos">
              {cat.productos.map((p) => (
                <article className="producto" key={p.titulo} onClick={() => setSeleccionado(p)}>
                  <img src={p.imagen} alt={p.titulo} />
                  <h3>{p.titulo}</h3>
                  <p>{p.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ModalProducto producto={seleccionado} onCerrar={() => setSeleccionado(null)} />
    </section>
  );
}