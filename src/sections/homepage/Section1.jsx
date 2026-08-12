import React from 'react';
import '../../styles/homepage/Section1.css';

function Section1() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        {/* Título Principal */}
        <h1 className="hero-title">
          ¿SU CARGA <br />
          ESTÁ <span className="highlight-red">PROTEGIDA?</span>
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          EVITE ROBOS, PÉRDIDAS Y MANIPULACIONES NO AUTORIZADAS.
        </p>

        {/* Botón */}
        <button className="hero-button">
          VER SOLUCIONES DE SEGURIDAD &gt;
        </button>

      </div>
    </section>
  );
}

export default Section1;