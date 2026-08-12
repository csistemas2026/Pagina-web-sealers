import React from 'react';
import '../../styles/homepage/Section6.css';
import bigBagImg from '../../assets/images/bigbag.png';

function Section6() {
  return (
    <section className="section6-container">
      <div className="section6-content">
        
        {/* BLOQUE IZQUIERDO: IMAGEN DEL PRODUCTO */}
        <div className="section6-image-side">
          <img 
            src={bigBagImg} 
            alt="Bolsas Big Bag" 
            className="product-img-bigbag" 
          />
        </div>

        {/* BLOQUE DERECHO: TEXTOS Y BOTÓN */}
        <div className="section6-text-side">
          <h2 className="section6-title">
           <span className="text-red">BOLSAS</span>
            <br />
            BIG BAG
          </h2>
          <p className="section6-description">
            Protección que fortalece tu operación.
          </p>
          <button className="section6-btn">
            DESCUBRE TU SOLUCIÓN DE SEGURIDAD <span className="btn-arrow">›</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section6;