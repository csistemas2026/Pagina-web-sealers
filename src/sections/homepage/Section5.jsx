import React from 'react';
import '../../styles/homepage/Section5.css';
import candadosElectronicos from '../../assets/images/candadoselectronicos.png';

function Section5() {
  return (
    <section className="section5-container">
      <div className="section5-content">
        
        {/* BLOQUE IZQUIERDO: TEXTOS Y BOTÓN */}
        <div className="section5-text-side">
          <span className="section5-tag">SEGURIDAD SATELITAL</span>
          <h2 className="section5-title">
            CANDADOS <br />
            ELECTRÓNICOS
          </h2>
          <p className="section5-description">
            Soluciones que protegen cada movimiento de tu mercancía.
          </p>
          <button className="section5-btn">
            DESCUBRE TU SOLUCIÓN DE SEGURIDAD <span className="btn-arrow"></span>
          </button>
        </div>

        {/* BLOQUE DERECHO: IMAGEN DEL PRODUCTO */}
        <div className="section5-image-side">
          <img 
            src={candadosElectronicos} 
            alt="Candados Electrónicos Satelitales" 
            className="product-img-candados" 
          />
        </div>

      </div>
    </section>
  );
}

export default Section5;