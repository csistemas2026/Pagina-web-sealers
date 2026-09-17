import React from 'react';
import '../../styles/homepage/Section4.css';
import precintoPlastico from '../../assets/images/precintoplastico.png';

function Section4() {
  return (
    <section className="section4-container">
      <div className="section4-content">
        
        {/* BLOQUE IZQUIERDO: IMAGEN DEL PRODUCTO */}
        <div className="section4-image-side">
          <img 
            src={precintoPlastico} 
            alt="Precinto de Plástico Ajustable" 
            className="product-img-plastico" 
          />
        </div>

        {/* BLOQUE DERECHO: TEXTOS Y BOTÓN */}
        <div className="section4-text-side">
          <span className="section4-tag">PRECINTOS DE</span>
          <h2 className="section4-title">
            PLÁSTICO <br />
            AJUSTABLE
          </h2>
          <p className="section4-description">
            Control e integridad en cada operación.
          </p>
          <button className="section4-btn">
            DESCUBRE TU SOLUCIÓN DE SEGURIDAD <span className="btn-arrow"></span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section4;