import React from 'react';
import '../../styles/conocenos/Section8.css';
import imagenSostenibilidad from '../../assets/images/reciclaje.png'; // Asegúrate de tener esta imagen

function Section8() {
  return (
    <section className="section8-container">
      <div className="section8-content">
        <div className="section8-image">
          <img src={imagenSostenibilidad} alt="Transformación de residuos" />
        </div>
        <div className="section8-text">
          <h2 className="section8-title">Transformamos Residuos en Oportunidades</h2>
          <div className="section8-line"></div>
          <p className="section8-description">
            Cada producto reciclado representa una nueva oportunidad para proteger el medio ambiente y generar valor social. En Sealers creemos que la innovación sostenible impulsa un futuro más responsable para todos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section8;