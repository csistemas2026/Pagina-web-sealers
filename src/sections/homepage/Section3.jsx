import React from 'react';
import '../../styles/homepage/Section3.css';
import precintoAltaSeguridad from '../../assets/images/precintoaltaseguridad.png';

function Section3() {
  return (
    <section className="section3-container">
      <div className="section3-content">
        
        {/* BLOQUE IZQUIERDO: TEXTOS Y BOTÓN */}
        <div className="section3-text-side">
          <span className="section3-tag">PRECINTOS DE</span>
          <h2 className="section3-title">
            ALTA <br />
            SEGURIDAD
          </h2>
          <p className="section3-description">
            Soluciones de seguridad para sectores exigentes.
          </p>
          <button className="section3-btn">
            DESCUBRE TU SOLUCIÓN DE SEGURIDAD <span className="btn-arrow">›</span>
          </button>
        </div>

        {/* BLOQUE DERECHO: IMAGEN DEL PRECINTO */}
        <div className="section3-image-side">
          <img 
            src={precintoAltaSeguridad} 
            alt="Precinto de Alta Seguridad" 
            className="product-img-alta" 
          />
        </div>

      </div>
    </section>
  );
}

export default Section3;