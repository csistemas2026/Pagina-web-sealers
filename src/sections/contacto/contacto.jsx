import React from 'react';
import Banner from '../../components/Banner';
import '../../styles/contacto/contacto.css';

const SeccionContacto = () => {
  return (
    <div className="contacto-page-container">
      {/* Banner Superior */}
      <Banner title="Contáctanos" />

      {/* Sección del Formulario e Información */}
      <section className="contacto-section">
        <h2 className="contacto-main-title">
          ¿Tienes alguna consulta? <span>Contáctanos</span>
        </h2>
        <div className="red-line-divider"></div>

        <div className="contacto-content-grid">
          {/* Formulario */}
          <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombres y apellidos:</label>
              <input type="text" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email:</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input type="tel" />
              </div>
            </div>

            <div className="form-group">
              <label>Asunto:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Mensaje:</label>
              <textarea rows="6"></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>

          {/* Información y Mapa */}
          <div className="contact-info-box">
            <div className="info-item">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <p>
                <strong>Dirección:</strong>
                <br />
                Calle Rene Descartes Nº 155 Sta. Raquel, Ate - Lima, Perú
              </p>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <p>
                <strong>Llámanos:</strong>
                <br />
                (01) 713 8800
                <br />
                +51 998 338 034
              </p>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <p>
                <strong>E-mail:</strong>
                <br />
                ventas@sealers.com.pe
              </p>
            </div>

            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7936180220217!2d-76.9524313251228!3d-12.05771638817997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6931e327735%3A0x8a5fb4bbfdb0ea5f!2sRene%20Descartes%20155%2C%20Lima%2015012!5e0!3m2!1ses-419!2spe!4v1784132069731!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Ubicación Corporación Sealers"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="navigation-buttons">
          <h3>¿Cómo llegar?</h3>
          <div className="nav-buttons-group">
            <a
              href="https://maps.google.com/?q=Calle+Rene+Descartes+155+Sta+Raquel+Ate+Lima"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav btn-map"
            >
              Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Calle+Rene+Descartes+155+Ate+Lima"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav btn-waze"
            >
              Waze
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeccionContacto;