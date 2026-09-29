import React from 'react';
import '../../styles/sostenibilidad/sos.css';

// Tus imágenes importadas
import imgHeroBanner from '../../assets/images/sostenibilidad-hero.jpg';
import imgPlaneta from '../../assets/images/planeta.jpg';
import imgReutiliza1 from '../../assets/images/reutiliza-1.jpg';
import imgReutiliza2 from '../../assets/images/reutiliza-2.jpg';
import imgReutiliza3 from '../../assets/images/reutiliza-3.jpg';
import imgMascota from '../../assets/images/collar-mascota.jpg';
import imgTags from '../../assets/images/tags.jpg';
import imgVarita from '../../assets/images/varita.jpg';
import imgHuellaLogo from '../../assets/images/huella-logo.jpg';
import imgIniciativas from '../../assets/images/iniciativas-fondo.jpg';

export default function Sos() {
  return (
    <div className="sos-page-container">
      {/* 1. Banner Superior Personalizado */}
      <section className="sos-hero-banner">
        <div className="sos-hero-bg">
          <img src={imgHeroBanner} alt="Sostenibilidad Hero" />
        </div>
        <div className="sos-hero-overlay"></div>
        <div className="sos-container sos-hero-content">
          <div className="sos-hero-text">
            <h1>Damos una nueva vida a<br />los materiales reciclados</h1>
            <div className="sos-hero-divider"></div>
          </div>
        </div>
      </section>

      {/* 2. Sección Principal: Más que seguridad, también cuidamos el planeta */}
      <section className="sos-main-section">
        <div className="sos-container">
          <div className="sos-main-grid">
            <div className="sos-image-box">
              <img src={imgPlaneta} alt="Cuidamos el planeta" className="sos-planeta-img" />
            </div>
            <div className="sos-content-box">
              <span className="sos-subtitle-line">NUESTRA APUESTA POR UN FUTURO MEJOR</span>
              <h2>Más que seguridad, también cuidamos el planeta</h2>
              <p>
                Creemos que cuidar también es una forma de proteger. Por eso, reutilizamos y aprovechamos materiales para reducir nuestro impacto ambiental y darles una nueva vida, transformándolos en productos que aportan valor y contribuyen a un futuro más sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección: Reutilizamos, transformamos y creamos */}
      <section className="sos-reutilizamos-section">
        <div className="sos-container">
          <div className="sos-section-title-center">
            <h2>Reutilizamos, transformamos y creamos</h2>
          </div>
          <div className="sos-cards-3-grid">
            <div className="sos-card-item">
              <div className="sos-card-img-box">
                <img src={imgReutiliza1} alt="Recuperamos materiales" />
              </div>
              <p>Recuperamos materiales para darles un nuevo propósito.</p>
            </div>
            <div className="sos-card-item">
              <div className="sos-card-img-box">
                <img src={imgReutiliza2} alt="Convertimos material" />
              </div>
              <p>Convertimos el material recuperado en nuevos productos.</p>
            </div>
            <div className="sos-card-item">
              <div className="sos-card-img-box">
                <img src={imgReutiliza3} alt="Economía circular" />
              </div>
              <p>Impulsamos una economía circular que beneficia a todos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección: Huella Viva */}
      <section className="sos-huella-section">
        <div className="sos-container">
          <div className="sos-huella-header">
            <h2 className="huella-title">Huella Viva</h2>
            <div className="red-divider"></div>
            <p>
              Es una iniciativa de <strong>Corporación Sealers</strong> que nace con el propósito de dar una nueva oportunidad a materiales recuperados. A través de la creatividad, la innovación y el aprovechamiento responsable de los recursos, desarrollamos soluciones útiles y funcionales que generan valor y contribuyen a un futuro más sostenible.
            </p>
          </div>

          <div className="sos-huella-grid-4">
            <div className="huella-item-card">
              <div className="huella-img-box">
                <img src={imgMascota} alt="Collar para mascota" />
              </div>
              <div className="huella-label">COLLAR PARA MASCOTA</div>
            </div>
            <div className="huella-item-card">
              <div className="huella-img-box">
                <img src={imgTags} alt="Tags de identificación" />
              </div>
              <div className="huella-label">TAGS DE IDENTIFICACIÓN</div>
            </div>
            <div className="huella-item-card">
              <div className="huella-img-box">
                <img src={imgVarita} alt="Varita de gato" />
              </div>
              <div className="huella-label">VARITA DE GATO</div>
            </div>
            <div className="huella-item-card huella-logo-card">
              <div className="huella-img-box">
                <img src={imgHuellaLogo} alt="Huella Viva Logo" />
              </div>
              <div className="huella-label logo-label">HUELLA VIVA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner Inferior: Juntos, creamos un futuro mejor */}
      <section className="sos-footer-banner">
        <div className="sos-banner-bg">
          <img src={imgIniciativas} alt="Fondo iniciativas" />
        </div>
        <div className="sos-container sos-banner-content-wrapper">
          <div className="sos-banner-content">
            <span className="sos-subtitle-line">JUNTOS, CREAMOS UN FUTURO MEJOR</span>
            <h2>Conoce nuestras iniciativas</h2>
            <button className="btn-ver-propuesta">
              Ver propuesta <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}