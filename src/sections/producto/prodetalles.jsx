import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import '../../styles/producto/prodetalles.css';
import { baseDeDatosCategorias, solucionesSecundarias, seguridadElectronica } from '../../data/productosData';

export default function ProDetalles({ productos = [] }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // 1. Obtener la lista consolidada de productos
  const todosLosProductos = productos.length > 0 
    ? productos 
    : [
        ...Object.values(baseDeDatosCategorias).flatMap(cat => cat.productos || []),
        ...(seguridadElectronica || [])
      ];

  // 2. Buscar producto y determinar a qué categoría pertenece
  const productoState = location.state?.producto;
  const productoEncontrado = todosLosProductos.find(
    (p) => String(p.id) === String(id) || p.slug === id
  );

  const producto = productoState || productoEncontrado;

  // Si no se encuentra el producto
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

  // Identificar dinámicamente la clave de categoría actual del producto
  let categoriaActualKey = '';
  for (const [key, catObj] of Object.entries(baseDeDatosCategorias)) {
    if (catObj.productos.some(p => String(p.id) === String(producto.id))) {
      categoriaActualKey = key;
      break;
    }
  }

  // 3. Imagen con fondo blanco
  const imagenDetalle = producto?.imgBlanco || producto?.img;

  const galeriaImagenes = Array.isArray(producto?.galeria) && producto.galeria.length > 0
    ? producto.galeria
    : [imagenDetalle].filter(Boolean);

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // --- LÓGICA IDÉNTICA A MAIN.JSX PARA EXCLUIR LA CATEGORÍA ACTUAL ---
  const listaRecomendados = (solucionesSecundarias || []).filter((item) => {
    return item.id !== categoriaActualKey && item.categoryKey !== categoriaActualKey;
  });

  const currentUrl = window.location.href;

  const handleShare = (platform) => {
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    } else if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(producto.title)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(currentUrl);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleCotizar = () => {
    const phone = '51999999999';
    const text = encodeURIComponent(`Hola, me interesa solicitar una cotización para el producto: ${producto.title}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleDescargarFicha = () => {
    if (producto.fichaTecnica || producto.pdf) {
      window.open(producto.fichaTecnica || producto.pdf, '_blank');
    } else {
      alert('La ficha técnica estará disponible próximamente.');
    }
  };

  return (
    <div className="detalle-page-container">
      
      {/* BANNER SUPERIOR */}
      <Banner title={producto.category || "Detalle de Producto"} />

      {/* BOTÓN REGRESAR */}
      <div className="detalle-back-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <svg 
            className="btn-back-icon" 
            xmlns="http://www.w3.org/2000/svg" 
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
          <span>Volver al catálogo</span>
        </button>
      </div>

      {/* CONTENIDO PRINCIPAL (2 COLUMNAS) */}
      <div className="detalle-content-wrapper">
        
        {/* COLUMNA IZQUIERDA: IMAGEN CON FONDO BLANCO */}
        <div className="detalle-image-section">
          <div className="detalle-main-img-box">
            <img 
              src={galeriaImagenes[activeImgIndex] || imagenDetalle} 
              alt={producto.title} 
            />
          </div>

          {/* Dots del slider 
          <div className="detalle-dots">
            {(galeriaImagenes.length > 1 ? galeriaImagenes : [1, 2, 3, 4]).map((_, idx) => (
              <span
                key={idx}
                className={`dot ${activeImgIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveImgIndex(idx % galeriaImagenes.length)}
              />
            ))}
          </div>*/}
        </div>

        {/* COLUMNA DERECHA: DETALLES Y ESPECIFICACIONES */}
        <div className="detalle-info-section">
          <span className="detalle-category">
            {producto.category || 'PRECINTO INDICATIVO'}
          </span>
          <h2 className="detalle-title">
            {producto.title}
          </h2>
          <p className="detalle-desc">
            {producto.description}
          </p>

          {/* TABLA DE ESPECIFICACIONES */}
          <div className="specs-container">
            {producto.material && (
              <div className="spec-row">
                <div className="spec-label dark">Material:</div>
                <div className="spec-value">{producto.material}</div>
              </div>
            )}

            {producto.grabado && (
              <div className="spec-row">
                <div className="spec-label dark">Especificaciones:</div>
                <div className="spec-value">{producto.grabado}</div>
              </div>
            )}

            {producto.propiedades && (
              <div className="spec-row">
                <div className="spec-label dark">Propiedades:</div>
                <div className="spec-value">{producto.propiedades}</div>
              </div>
            )}

            {(producto.uso || producto.usosRecomendados) && (
              <div className="spec-row">
                <div className="spec-label dark">Aplicaciones:</div>
                <div className="spec-value">{producto.uso || producto.usosRecomendados}</div>
              </div>
            )}
          </div>

          {/* COMPARTIR */}
          <div className="detalle-share">
            <span>Compartir:</span>
            <div className="social-icons">
              <button type="button" onClick={() => handleShare('linkedin')}>in</button>
              <button type="button" onClick={() => handleShare('facebook')}>f</button>
              <button type="button" onClick={() => handleShare('x')}>X</button>
              <button type="button" onClick={() => handleShare('copy')}>🔗</button>
            </div>
          </div>
        </div>

      </div>

      {/* --- BARRA INFERIOR DE ACCIONES --- */}
      <div className="detalle-footer-bar-container">
        <div className="benefits-card-block">
          <div className="benefit-item">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0114 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z"/>
            </svg>
            <div className="benefit-text">
              <span>Asesoría</span>
              <span>especializada.</span>
            </div>
          </div>

          <div className="benefit-item">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              <path d="M16.5 13.5l2 2-5 5H11v-2.5l5.5-5.5z"/>
            </svg>
            <div className="benefit-text">
              <span>Personalización</span>
              <span>incluida.</span>
            </div>
          </div>

          <div className="benefit-item">
            <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <div className="benefit-text">
              <span>Beneficios</span>
              <span>logísticos.</span>
            </div>
          </div>
        </div>

        <button className="btn-cotizar-card" onClick={handleCotizar}>
          <div className="btn-icon-circle">
            <svg viewBox="0 0 24 24" fill="#00c853">
              <path d="M12 2a10 10 0 00-10 10c0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.25A9.97 9.97 0 0012 22a10 10 0 0010-10A10 10 0 0012 2zm5.2 13.2c-.2.6-.8 1.1-1.5 1.3-.7.2-1.6.3-3.8-.6-2.8-1.2-4.6-4-4.8-4.3-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.6-.4.8-.4.2 0 .5 0 .7.1.2 0 .5.8.7 1.3.2.5.3.7.2.9-.1.2-.2.4-.4.6-.2.2-.4.4-.2.8.5 1 1.5 2 2.7 2.7.4.2.8.1 1-.1.2-.2.5-.6.8-.9.2-.3.5-.2.8-.1.3.1 2 .9 2.3 1.1.3.2.5.3.6.5s.1.8-.1 1.4z"/>
            </svg>
          </div>
          <span>Solicitar cotización</span>
        </button>

        <button className="btn-ficha-card" onClick={handleDescargarFicha}>
          <div className="btn-icon-rounded">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="3" width="14" height="18" rx="3"/>
              <path d="M12 8v7m-3-3l3 3 3-3"/>
            </svg>
          </div>
          <span>Descargar ficha técnica</span>
        </button>
      </div>

      {/* SECCIÓN DE PRODUCTOS RECOMENDADOS */}
      {listaRecomendados && listaRecomendados.length > 0 && (
        <section className="recomendados-section">
          <div className="recomendados-container">
            <h2 className="recomendados-titulo">
              Selección recomendada
              <span className="titulo-subrayado"></span>
            </h2>

            <div className="recomendados-grid">
              {listaRecomendados.map((item) => (
                <div 
                  className="main-card" 
                  key={item.id}
                  onClick={() => navigate(item.path || `/subproductos/prodetalles/${item.id}`, { state: { producto: item } })}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="main-card-img-box">
                    <img src={item.img || item.image} alt={item.title} />
                    
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
      )}

    </div>
  );
}