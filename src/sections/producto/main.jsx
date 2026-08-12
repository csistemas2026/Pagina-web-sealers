import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/producto/main.css';
import '../../styles/contacto/Section1.css';
// Asegúrate de tener tu imagen en esta ruta
import fondopro from '../../assets/images/fondopro.jpg'; 
import altaseguridad from '../../assets/images/altaseguridad.jpg'; 

function Main() {
  const navigate = useNavigate();

  // 1. Productos principales de la categoría superior
  const productosPrincipales = [
    { id: 1, title: 'ZEUS', category: 'Precinto Aduanero', img: altaseguridad, 
      description:'Mayor seguridad para sus operaciones logisticas con el Precinto Aduanero Tipo Botella...',
      material: 'TAMBOR: Acero zincado, forrado con policarbonato...',
      grabado: 'Marcación Sistema láser / Logotipo o nombre personalizado...',
      propiedades: 'Resistencia a la tracción: 1400 Kgs.',
      uso: 'Containers / Vagones ferroviarios / Camiones...',      
      path: '/subproductos/prodetalles/1'
    },

    { id: 2, title: 'COLOSO', category: 'Candados Electrónicos', img: fondopro, path: '/subproductos/prodetalles/2' },
    { id: 3, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 4, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 5, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 6, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 7, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 8, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 9, title: 'COLOSO', category: 'Candados Electrónicos', img: altaseguridad, path: '/subproductos/prodetalles' },
  ];

  // 2. Soluciones secundarias para la sección inferior ("Encuentra más Soluciones para ti")
  const solucionesSecundarias = [
    { id: 1, title: 'BIG BAG', category: 'Bolsos', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 2, title: 'ADUANERO', category: 'Kits', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 3, title: 'ALTA SEGURIDAD', category: 'Precintos de', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 4, title: 'SEGURIDAD', category: 'Precintos de', img: altaseguridad, path: '/subproductos/prodetalles' },
    { id: 5, title: 'INDICATIVOS', category: 'Precintos de', img: altaseguridad, path: '/subproductos/prodetalles' },
  ];

  return (
    <div className="main-page-container">
      <section className="contacto-hero">
      <div className="contacto-overlay">
        <h1 className="contacto-title">Precintos Alta seguridad</h1>
      </div>
    </section>
      {/* SECCIÓN 1: Cuadrícula Principal de Productos */}
      <section className="main-productos-section">
        <div className="main-productos-grid">
          {productosPrincipales.map((item) => (
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

        {/* Paginación de la sección principal */}
        <div className="main-pagination">
          <span className="page-dot active">1</span>
          <span className="page-dot">2</span>
          <span className="page-dot">3</span>
          <span className="page-dot">4</span>
        </div>
      </section>

      {/* SECCIÓN 2: "Encuentra más Soluciones para ti" */}
      <section className="more-solutions-section">
        <div className="solutions-header">
          <h2>Encuentra más Soluciones para ti</h2>
          <div className="red-divider"></div>
        </div>

        <div className="solutions-grid">
          {solucionesSecundarias.map((item) => (
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
      </section>

    </div>
  );
}

export default Main;