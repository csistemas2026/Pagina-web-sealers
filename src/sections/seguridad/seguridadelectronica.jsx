import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import '../../styles/seguridad/seguridadelectronica.css';
import { seguridadElectronica } from '../../data/productosData';

import imgLogistica from '../../assets/images/logistica.jpg';
import imgAlmacen from '../../assets/images/almacen.jpg';
import imgRetail from '../../assets/images/retail.jpg';
import imgBannerPromo from '../../assets/images/banner-promo-seguridad.jpg';

const SeccionSeguridadElectronica = () => {
  const navigate = useNavigate();

  // Obtenemos los productos clave
  const rfidItem = seguridadElectronica.find((item) => item.id === 35);
  const candadoEjemplo = seguridadElectronica.find((item) => item.id === 33);

  return (
    <div className="seguridad-page-container">
      <Banner title="Seguridad electrónica" />

      {/* Tarjetas Principales */}
      <section className="seguridad-main-products">
        <div className="seguridad-container">
          <div className="products-grid-3" style={{ justifyContent: 'center', display: 'flex', gap: '20px' }}>
            
            {/* Card 1: Candados Electrónicos (Abre el nivel 2) */}
            <div 
              className="product-card" 
              onClick={() => navigate('/seguridad/candados-electronicos')}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <img src={candadoEjemplo?.imggeneral} alt="Candados Electrónicos" />
              <div className="card-overlay">
                <h3>CANDADOS ELECTRÓNICOS</h3>
              </div>
            </div>

            {/* Card 2: Lector RFID (Abre directamente el detalle 35) */}
            {rfidItem && (
              <div 
                className="product-card" 
                onClick={() => navigate(rfidItem.path, { state: { producto: rfidItem } })}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                <img src={rfidItem.img} alt={rfidItem.title} />
                <div className="card-overlay">
                  <h3>LECTOR RFID</h3>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Sección de Industrias */}
      <section className="seguridad-industrias-section">
        <div className="seguridad-container">
          <h2 className="industrias-title">Soluciones para distintas industrias</h2>
          <div className="red-divider"></div>

          <div className="industrias-grid-3">
            <div className="industria-card">
              <img src={imgLogistica} alt="Logística" />
              <div className="card-overlay">
                <h4>LOGÍSTICA</h4>
              </div>
            </div>
            <div className="industria-card">
              <img src={imgAlmacen} alt="Almacén" />
              <div className="card-overlay">
                <h4>ALMACÉN</h4>
              </div>
            </div>
            <div className="industria-card">
              <img src={imgRetail} alt="Retail" />
              <div className="card-overlay">
                <h4>RETAIL</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section 
        className="seguridad-promo-banner" 
        style={{ backgroundImage: `url(${imgBannerPromo})` }}
      >
        <div className="seguridad-container promo-content">
          <div className="promo-text">
            <h2>Tecnología que protege,<br />identifica y controla<br />tu carga.</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeccionSeguridadElectronica;