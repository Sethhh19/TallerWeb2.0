export default function Footer() {
  return (
    <footer>
      <div className="image">
        <a href="#">
          <img src="/imagenes/emmalux.svg" alt="Logo Importaciones EMMALUX" />
        </a>
      </div>

      <div className="footer-section">
        <h3>Legales</h3>
        <ul>
          <li><a href="#">Políticas de privacidad</a></li>
          <li><a href="#">Términos y condiciones</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <ul className="social-icons">
          <li><a href="https://web.facebook.com/importacionesemmalux/?rdid=RXMlAUIjsPzwjsr8" target="_blank" rel="noreferrer"><i className="bx bxl-facebook-circle"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=%2B51933155780" target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp"></i></a></li>
          <li><a href="https://www.tiktok.com/@importaciones.emmalux?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"><i className="bx bxl-tiktok"></i></a></li>
        </ul>

        <p className="copy-message">Importaciones EMMALUX &copy; 2026 - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}