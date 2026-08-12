import React from 'react';
import '../../styles/contacto/Section2.css';

function Section2() {
  return (
    <section className="section2-container">
      <h2 className="section2-title">
        ¿Tienes alguna consulta? <span>Contáctanos</span>
      </h2>

      <div className="section2-content">
        {/* Formulario */}
        <form className="contact-form">
          <label>Nombres y apellidos:</label>
          <input type="text" />
          
          <div className="form-row">
            <div>
              <label>Email:</label>
              <input type="email" />
            </div>
            <div>
              <label>Teléfono:</label>
              <input type="tel" />
            </div>
          </div>

          <label>Asunto:</label>
          <input type="text" />

          <label>Mensaje:</label>
          <textarea rows="6"></textarea>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>

        {/* Información y Mapa */}
        <div className="contact-info-box">
          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <p><strong>Dirección:</strong><br />Calle Rene Descartes Nº 155 Sta. Raquel, Ate - Lima, perú</p>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <p><strong>Llámanos:</strong><br />(01) 713 8800<br />+51 998 338 034</p>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <p><strong>E-mail:</strong><br />ventas@sealers.com.pe</p>
          </div>
          <div className="map-placeholder">
            {/* Aquí puedes insertar tu iframe de Google Maps */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7936180220217!2d-76.9524313251228!3d-12.05771638817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6931e327735%3A0x8a5fb4bbfdb0ea5f!2sRene%20Descartes%20155%2C%20Lima%2015012!5e0!3m2!1ses-419!2spe!4v1784132069731!5m2!1ses-419!2spe" 
            width="100%" 
            height="100%" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy">          
            </iframe>
          </div>
        </div>
      </div>

      {/* Botones finales */}
      <div className="navigation-buttons">
        <h3>¿Cómo llegar?</h3>
        <a href="https://maps.google.com" target="_blank" className="btn-nav btn-map">Google Maps</a>
        <a href="https://waze.com" target="_blank" className="btn-nav btn-waze">Waze</a>
      </div>
    </section>
  );
}

export default Section2;