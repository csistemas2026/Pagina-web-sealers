import React from 'react';
import '../styles/Footer.css';
import logoFooter from '../assets/images/footer.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* COLUMNA 1: LOGO Y DATOS DE CONTACTO */}
        <div className="footer-col col-brand">
          <img src={logoFooter} alt="Corporación Sealers S.A." className="footer-logo-img"
          style={{ 
    width: '150px', 
    height: 'auto', 
    display: 'block' 
  }} />
          <p className="footer-description">
            Soluciones de seguridad, identificación y trazabilidad para la logística y transporte e industria.
          </p>
          <hr className="footer-divider-red" />
          <div className="footer-info-list">
            <p className="info-item">
              <span className="icon-red">📍</span> Calle Rene Descartes Nº 155 Sta. Raquel, Ate - Lima, perú
            </p>
            <p className="info-item">
              <span className="icon-red">📞</span> +51 998 338 034
            </p>
            <p className="info-item">
              <span className="icon-red">✉️</span> ventas@sealers.com.pe
            </p>
          </div>
        </div>

        {/* COLUMNA 2: MÁS VISITADOS */}
        <div className="footer-col">
          <h3 className="footer-title">MÁS VISITADOS</h3>
          <ul className="footer-links">
            <li><a href="/"><span className="arrow-red">&gt;</span> Inicio</a></li>
            <li><a href="/conocenos"><span className="arrow-red">&gt;</span> Conócenos</a></li>
            <li><a href="/categorias"><span className="arrow-red">&gt;</span> Productos</a></li>
            <li><a href="#seguridad"><span className="arrow-red">&gt;</span> Seguridad Satelital</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: PUBLICACIONES */}
        <div className="footer-col">
          <h3 className="footer-title">PUBLICACIONES</h3>
          <ul className="footer-links">
            <li><a href="/blog"><span className="arrow-red">&gt;</span> Noticias</a></li>
            <li><a href="/blog"><span className="arrow-red">&gt;</span> Eventos</a></li>
            <li><a href="#normativa"><span className="arrow-red">&gt;</span> Normativa</a></li>
            <li><a href="#sostenibilidad"><span className="arrow-red">&gt;</span> Sostenibilidad</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: SÍGUENOS Y REDES */}
        <div className="footer-col">
          <h3 className="footer-title">SÍGUENOS</h3>
          <p className="siguenos-text">
            Entérate de nuestras últimas novedades, lanzamientos y soluciones para tu empresa.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook">f</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn linkedin">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram">📸</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn youtube">▶</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="social-btn twitter-x">X</a>
          </div>
        </div>

        {/* COLUMNA 5: LIBRO DE RECLAMACIONES */}
        <div className="footer-col col-reclamaciones">
          <h3 className="footer-title">LIBRO DE RECLAMACIONES</h3>
          <div className="reclamaciones-content">
            {/* Reemplaza este SVG por tu icono de libro si lo prefieres */}
            <svg className="book-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21V5m0 16a8 8 0 01-8-8V4a1 1 0 011-1h6.5A1.5 1.5 0 0113 4.5V21m-1 0a8 8 0 008-8V4a1 1 0 00-1-1H13.5A1.5 1.5 0 0012 4.5" />
            </svg>
            <button className="btn-libro">
              Ir al libro <span className="btn-arrow">➔</span>
            </button>
          </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-copyright">
        <p>CORPORACIÓN SEALERS© 2026 - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;