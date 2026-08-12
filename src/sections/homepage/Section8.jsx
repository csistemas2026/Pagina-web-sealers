import React from 'react';
import '../../styles/homepage/Section8.css';
import asesoriaImg from '../../assets/images/asesoria.png';

function Section8() {
  return (
    <section className="advisor-section">
      <div className="advisor-master-container">
        
        {/* Encabezado de la sección */}
        <h2 className="advisor-main-title">
          ¿Listo para recibir asesoría <br /> profesional?
        </h2>
        <span className="advisor-title-line"></span>
        <p className="advisor-subtitle">
          Nuestro equipo de especialistas está preparado para asesorarte.
        </p>

        {/* Contenedor de la imagen circular de la asesora y el botón flotante */}
        <div className="advisor-image-wrapper">
          <div className="advisor-circle-bg">
            <img src={asesoriaImg} alt="Asesora de Seguridad" className="advisor-img" />
          </div>

          {/* Botón Flotante "Estamos listos para ayudarte" */}
          <button className="advisor-float-btn">
            <div className="advisor-btn-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <div className="advisor-btn-text">
              <span>ESTAMOS LISTOS</span>
              <strong>PARA AYUDARTE</strong>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section8;