import React from 'react';
import '../../styles/conocenos/Section7.css';

import politicasig from '../../assets/images/politicasig.jpg';
import codigoetica from '../../assets/images/codigoetica.jpg';
import politicaresponsabilidad from '../../assets/images/politicaresponsabilidad.jpg';

function Section7() {
  return (
    <section className="section7-main-container">
      <h2 className="section7-title">Nuestras Políticas Sealers</h2>
      <div className="section7-line"></div>
      <p className="section7-subtitle">Construimos Confianza con Cada Proceso</p>

      <div className="section7-cards-container">
        {/* Tarjeta 1 */}
        <a href="/ruta-a-tu-documento-sig.pdf" download className="image-card">
          <img src={politicasig} alt="Política SIG" className="card-image" />
          <div className="overlay">
            <p className="overlay-text">Política SIG</p>
            <span className="download-btn">DESCARGAR DOCUMENTO &gt;</span>
          </div>
        </a>

        {/* Tarjeta 2 */}
        <a href="/ruta-a-tu-documento-etica.pdf" download className="image-card">
          <img src={codigoetica} alt="Código de Ética" className="card-image" />
          <div className="overlay">
            <p className="overlay-text">Código de Ética y Conducta</p>
            <span className="download-btn">DESCARGAR DOCUMENTO &gt;</span>
          </div>
        </a>

        {/* Tarjeta 3 */}
        <a href="/ruta-a-tu-documento-rse.pdf" download className="image-card">
          <img src={politicaresponsabilidad} alt="Política RSE" className="card-image" />
          <div className="overlay">
            <p className="overlay-text">Política RSE</p>
            <span className="download-btn">DESCARGAR DOCUMENTO &gt;</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Section7;