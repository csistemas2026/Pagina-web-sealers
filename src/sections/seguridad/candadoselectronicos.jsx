import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import '../../styles/producto/main.css'; 
import { seguridadElectronica, solucionesSecundarias } from '../../data/productosData';

export default function CandadosElectronicos() {
  const navigate = useNavigate();

  // Filtrar solo Gran Coloso (33) y Escorpión (34)
  const candados = seguridadElectronica.filter(
    (item) => item.id === 33 || item.id === 34
  );

  const handleCardClick = (item) => {
    navigate(item.path, { state: { producto: item } });
  };

  return (
    <div className="main-page-container">
      <Banner title="Candados electrónicos" />

      {/* Botón Volver */}
      <div 
        className="detalle-back-container" 
        style={{ maxWidth: '1500px', margin: '30px auto 0 auto', padding: '0 10px' }}
      >
        <button className="btn-back" onClick={() => navigate('/seguridad')}>
          <svg 
            className="btn-back-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Volver a Seguridad Electrónica</span>
        </button>
      </div>

      {/* Lista de Candados Electrónicos */}
      <section className="main-productos-section" style={{ padding: '30px 20px' }}>
        <div 
          className="main-productos-grid" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '50px', 
            flexWrap: 'wrap', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}
        >
          {candados.map((item) => (
            <div 
              className="main-card" 
              key={item.id}
              onClick={() => handleCardClick(item)}
              style={{ cursor: 'pointer', width: '350px' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                <div className="main-card-overlay">
                  <div className="eye-icon">👁</div>
                  <h3 className="main-card-title">{item.title}</h3>
                  <span className="main-card-cat">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Encuentra más Soluciones */}
      <section className="more-solutions-section" style={{ marginTop: '30px', paddingBottom: '60px' }}>
        <div className="solutions-header">
          <h2>Encuentra más Soluciones para ti</h2>
          <div className="red-divider"></div>
        </div>

        <div 
          className="solutions-grid" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            flexWrap: 'wrap', 
            maxWidth: '900px', 
            margin: '0 auto' 
          }}
        >
          {(solucionesSecundarias || []).slice(0, 3).map((item) => (
            <div 
              className="main-card" 
              key={item.id}
              onClick={() => navigate(item.path || '/categorias')}
              style={{ cursor: 'pointer', width: '250px' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                <div className="main-card-overlay">
                  <div className="eye-icon">👁</div>
                  <h3 className="main-card-title">{item.title}</h3>
                  <span className="main-card-cat">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}