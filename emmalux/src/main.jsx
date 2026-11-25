import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Estilos en el mismo orden que el index.html original
import "./styles/header.css";
import "./styles/nosotros.css";
import "./styles/catalogo.css";
import "./styles/asesoria.css";
import "./styles/footer.css";
import "./styles/integracion.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);