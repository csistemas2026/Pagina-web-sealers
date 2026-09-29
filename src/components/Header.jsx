import React, { useState } from 'react';
import '../styles/Header.css';
import logoheader from '../assets/images/logoheader.gif';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* LADO IZQUIERDO: Logo */}
        <div className="logo-box">
          <Link to="/">
            <img src={logoheader} alt="Corporación Sealers S.A." className="site-logo"/>
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA: Solo visible en móvil */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* LADO DERECHO: Contenido de info y navegación */}
        <div className={`header-right-content ${isOpen ? 'active' : ''}`}>
          
          <div className="top-info-bar">
            <div className="info-left">
              <div className="info-item">
                <i className="fa-solid fa-shield-halved header-red-icon"></i>
                <span>Certificaciones Internacionales</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-earth-americas header-red-icon"></i>
                <span>Exportación a más de 20 Países</span>
              </div>
            </div>
            
            <div className="info-right">
              <div className="info-item">
                <i className="fa-solid fa-phone header-red-icon"></i>
                <a href="tel:017138800" className="top-link">01 713-8800</a>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-envelope header-red-icon"></i>
                <a href="mailto:venta@sealers.com.pe" className="top-link">venta@sealers.com.pe</a>
              </div>
              <div className="info-lang">                
                <img src="https://flagcdn.com/w40/es.png" alt="España" className="flag-icon" />
              </div>
            </div>
          </div>

          <nav className="navigation-menu">
            <Link to="/conocenos" onClick={() => setIsOpen(false)}>CONÓCENOS</Link>

            {/* MENÚ DESPLEGABLE DE PRODUCTOS */}
            <div className="nav-dropdown-wrapper">
              <a href="/categorias" onClick={() => setIsOpen(false)}>PRODUCTOS</a>

              {/* NIVEL 1 */}
              <ul className="dropdown-level-1">
                <li className="has-submenu">
                  <a href="#alta-seguridad">PRECINTOS DE ALTA SEGURIDAD (H)</a>
                  {/* NIVEL 2 */}
                  <ul className="dropdown-level-2">
                    <li><a href="#metalico-flexible-h">METÁLICO FLEXIBLE</a></li>
                    <li><a href="#metalico-rigido-h">METÁLICO RÍGIDO</a></li>
                  </ul>
                </li>

                <li className="has-submenu">
                  <a href="#seguridad">PRECINTOS DE SEGURIDAD (S)</a>
                  {/* NIVEL 2 */}
                  <ul className="dropdown-level-2">
                    <li><a href="#metalico-flexible-s">METÁLICO FLEXIBLE</a></li>
                  </ul>
                </li>

                <li className="has-submenu">
                  <a href="#indicativos">PRECINTOS INDICATIVOS (I)</a>
                  {/* NIVEL 2 */}
                  <ul className="dropdown-level-2">
                    <li><a href="#plastico-ajustable">PLÁSTICO AJUSTABLE</a></li>
                    <li><a href="#plastico-fijo">PLÁSTICO FIJO</a></li>
                    <li><a href="#tipo-flecha">TIPO FLECHA</a></li>
                  </ul>
                </li>

                <li><a href="#especiales">PRECINTOS ESPECIALES</a></li>
                <li><a href="#kits">KITS ESPECIALIZADOS</a></li>
                <li><a href="#big-bag">BOLSAS BIG BAG</a></li>
              </ul>
            </div>

            <a href="/seguridad" onClick={() => setIsOpen(false)}>SEGURIDAD ELECTRÓNICA</a>
            <a href="/sostenibilidad" onClick={() => setIsOpen(false)}>SOSTENIBILIDAD</a>
            <a href="/blog" onClick={() => setIsOpen(false)}>BLOG</a>
            <a href="/contacto" onClick={() => setIsOpen(false)}>CONTACTO</a>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;