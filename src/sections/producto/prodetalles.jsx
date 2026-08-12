import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/producto/prodetalles.css';
import '../../styles/contacto/Section1.css';

// Importa tus imágenes o usa las rutas correspondientes
import bannerImg from '../../assets/images/altaseguridad.jpg';


 const Categorias = [
    { id: 1, title: 'BIG BAG', category: 'Bolsos', img: bannerImg, path: '/subproductos/prodetalles' },
    { id: 2, title: 'ADUANERO', category: 'Kits', img: bannerImg, path: '/subproductos/prodetalles' },
    { id: 3, title: 'ALTA SEGURIDAD', category: 'Precintos de', img: bannerImg, path: '/subproductos/prodetalles' },
    { id: 4, title: 'SEGURIDAD', category: 'Precintos de', img: bannerImg, path: '/subproductos/prodetalles' },
    { id: 5, title: 'INDICATIVOS', category: 'Precintos de', img: bannerImg, path: '/subproductos/prodetalles' },
  ];


export default function ProDetalles({ productos = [] }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Si pasas el producto por state o necesitas buscarlo de otra manera según tu lógica actual:
  const producto = location.state?.producto || productos[0];

  // Si no se encuentra el producto, mostramos una vista de respaldo
  if (!producto) {
    return (
      <div className="detalle-page-container">
        <div className="detalle-no-encontrado">
          <h2>Producto no encontrado</h2>
          <p>Lo sentimos, el producto que buscas no existe o fue removido.</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-page-container">
      
      {/* --- BANNER HERO SUPERIOR --- */}
      <section className="contacto-hero">
        <div className="contacto-overlay">
          <h1 className="contacto-title">{producto.category ||"Precintos Alta seguridad"}</h1>
        </div>
      </section>

      {/* --- CONTENEDOR PRINCIPAL DE LAS 2 COLUMNAS --- */}
      <div className="detalle-content-wrapper">
        
        {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
        <div className="detalle-image-section">
          <div className="detalle-main-img-box">
            <img src={producto.image || bannerImg} alt={producto.title} />
          </div>
          <div className="detalle-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: INFORMACIÓN --- */}
        <div className="detalle-info-section">
          <span className="detalle-category">{producto.category || "Precinto Aduanero"}</span>
          <h2 className="detalle-title">{producto.title || "ZEUS"}</h2>
          <p className="detalle-desc">
            {producto.description || "Mayor seguridad para sus operaciones logisticas con el Precinto Aduanero Tipo Botella..."}
          </p>

          {/* --- ESPECIFICACIONES --- */}
          <div className="specs-container">
            <div className="spec-row">
              <div className="spec-label dark">Material:</div>
              <div className="spec-value">{producto.material || "TAMBOR: Acero zincado, forrado con policarbonato..."}</div>
            </div>

            <div className="spec-row">
              <div className="spec-label dark">Grabado:</div>
              <div className="spec-value">{producto.grabado || "Marcación Sistema láser / Logotipo o nombre personalizado..."}</div>
            </div>

            <div className="spec-row">
              <div className="spec-label dark">Propiedades:</div>
              <div className="spec-value">{producto.propiedades || "Resistencia a la tracción: 1400 Kgs."}</div>
            </div>

            <div className="spec-row">
              <div className="spec-label dark">Uso recomendados:</div>
              <div className="spec-value">{producto.uso || "Containers / Vagones ferroviarios / Camiones..."}</div>
            </div>
          </div>

          {/* --- COMPARTIR --- */}
          <div className="detalle-share">
            <span>Compartir:</span>
            <div className="social-icons">
              <span>in</span>
              <span>f</span>
              <span>X</span>
              <span>🔗</span>
            </div>
          </div>
        </div>

      </div>

      {/* --- BARRA INFERIOR DE ACCIONES --- */}
      <div className="detalle-footer-bar">
        <div className="benefits-group">
          <div className="benefit-item">
            <span>🎧</span> Asesoría especializada.
          </div>
          <div className="benefit-item">
            <span>✍️</span> Personalización incluida.
          </div>
          <div className="benefit-item">
            <span>🚚</span> Beneficios logísticos.
          </div>
        </div>

        <div className="actions-group">
          <button className="btn-cotizar">
            🟢 Solicitar cotización
          </button>
          <button className="btn-ficha">
            📄 Descargar ficha técnica
          </button>
        </div>
      </div>

      {/* --- SECCIÓN: SELECCIÓN RECOMENDADA --- */}
      <section className="recomendados-section">
        <div className="recomendados-container">
          <h2 className="recomendados-titulo">
            Selección recomendada
            <span className="titulo-subrayado"></span>
          </h2>

          <div className="recomendados-grid">
            {Categorias.map((item) => (
            <div 
              className="main-card" 
              key={item.id}
              onClick={() => navigate(item.path, { state: { producto: item } })}
              style={{ cursor: 'pointer' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                
                {/* Overlay con hover */}
                <div className="main-card-overlay">
                  <div className="eye-icon">👁</div>
                  <span className="main-card-cat">{item.category}</span>
                  <h3 className="main-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

    </div>
  );
}