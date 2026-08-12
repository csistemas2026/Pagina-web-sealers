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
                  <img src="https://flagcdn.com/w40/es.png" alt="España" 
                  style={{ width: '30px', /* Un poco más pequeño para que no desentone con los iconos */
      height: 'auto', 
      display: 'inline-block', 
      borderRadius: '3px',
      verticalAlign: 'middle' }} />
                
              </div>
            </div>
          </div>

          <nav className="navigation-menu">
            <Link to="/conocenos" onClick={() => setIsOpen(false)}>CONÓCENOS</Link>
            <a href="/categorias" onClick={() => setIsOpen(false)}>PRODUCTOS</a>
            <a href="#seguridad" onClick={() => setIsOpen(false)}>SEGURIDAD SATELITAL</a>
            <a href="/cursos" onClick={() => setIsOpen(false)}>CURSOS</a>
            <a href="#sostenibilidad" onClick={() => setIsOpen(false)}>SOSTENIBILIDAD</a>
            <a href="/blog" onClick={() => setIsOpen(false)}>BLOG</a>
            <a href="/contacto" onClick={() => setIsOpen(false)}>CONTACTO</a>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;