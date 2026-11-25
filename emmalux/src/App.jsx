import Header from "./components/Header.jsx";
import Bienvenida from "./components/Bienvenida.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Asesoria from "./components/Asesoria.jsx";
import Opinion from "./components/Opinion.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Bienvenida />
      <Nosotros />
      <main>
        <Catalogo />
        <Asesoria />
      </main>
      <Opinion />
      <Footer />
    </>
  );
}