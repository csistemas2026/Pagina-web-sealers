import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/producto/main.css';
import '../../styles/contacto/Section1.css';

// Imágenes
import fondopro from '../../assets/images/fondopro.jpg'; 
import altaseguridad from '../../assets/images/altaseguridad.jpg';
import zeusblanco from '../../assets/images/zeusblanco.jpg';
import zeusamarillo from '../../assets/images/zeusamarillo.jpg';
import securelockverde from '../../assets/images/securelockverde.jpg';
import hercules from '../../assets/images/hercules.jpg';

//PRECINTOS SEGURIDAD IMAGENES

import securelock23 from '../../assets/images/securelock23.jpg';
import secureperno from '../../assets/images/securelockperno.jpg';
import securelockABS from '../../assets/images/securelockABS.jpg';


//PRECINTO 

function Main() {
  const navigate = useNavigate();
  // 1. Capturamos el slug/id de la URL (/productos/:id)
  const { id } = useParams();

  // 2. Base de datos/Mapeo dinamico segun el id de la URL
  const baseDeDatosCategorias = {
    'alta-seguridad': {
      titulo: 'Precintos de Alta Seguridad',
      productos: [
        { id: 1, title: 'ZEUS', category: 'Precinto de Alta Seguridad', img: zeusamarillo, path: '/subproductos/prodetalles/1'},  
        { id: 2, title: 'ZEUS ENCAPSULADO', category: 'Precinto de Alta Seguridad', img: zeusblanco, path: '/subproductos/prodetalles/2' },
        { id: 3, title: 'HÉRCULES', category: 'Precinto de Alta Seguridad', img: hercules, path: '/subproductos/prodetalles/3' },
        { id: 4, title: 'SECURE LOCK lV', category: 'Precinto de Alta Seguridad', img: securelockverde, path: '/subproductos/prodetalles/4' },
      ]
    },
    'seguridad': {
      titulo: 'Precintos de Seguridad',
      productos: [
        { id: 5, title: 'SECURE LOCK ll-lll', category: 'Precinto de Seguridad', img: securelock23, path: '/subproductos/prodetalles/5' },
        { id: 6, title: 'SECURE LOCK C-PERNO', category: 'Precinto de Seguridad', img: secureperno, path: '/subproductos/prodetalles/6' },
        { id: 7, title: 'SECURE LOCK lll ABS', category: 'Precinto de Seguridad', img: securelockABS, path: '/subproductos/prodetalles/7' },
      ]
    },
    'indicativos': {
      titulo: 'Precintos Indicativos',
      productos: [
        { id: 8, title: 'INDICATIVO PLÁSTICO', category: 'Precinto Indicativo', img: altaseguridad, path: '/subproductos/prodetalles/8' },
      ]
    },
    'especializados': {
      titulo: 'Kits Especializados',
      productos: [
        { id: 9, title: 'KIT ESPECIALIZADO 1', category: 'Kits', img: altaseguridad, path: '/subproductos/prodetalles/9' },
      ]
    },
    'big-bag': {
      titulo: 'Bolsa Big Bag',
      productos: [
        { id: 10, title: 'BOLSA BIG BAG HEAVY', category: 'Bolsa', img: altaseguridad, path: '/subproductos/prodetalles/10' },
      ]
    }
  };

  // 3. Obtenemos la información según la URL (si no coincide con ninguna, usa alta-seguridad por defecto)
  const categoriaActual = baseDeDatosCategorias[id] || baseDeDatosCategorias['alta-seguridad'];

  // 4. Soluciones secundarias
  const solucionesSecundarias = [
    { id: 1, title: 'BIG BAG', category: 'Bolsos', img: altaseguridad, path: '/productos/big-bag' },
    { id: 2, title: 'ESPECIALIZADOS', category: 'Kits', img: altaseguridad, path: '/productos/especializados' },
    { id: 3, title: 'ALTA SEGURIDAD', category: 'Precintos de', img: altaseguridad, path: '/productos/alta-seguridad' },
    { id: 4, title: 'SEGURIDAD', category: 'Precintos de', img: altaseguridad, path: '/productos/seguridad' },
    { id: 5, title: 'INDICATIVOS', category: 'Precintos de', img: altaseguridad, path: '/productos/indicativos' },
  ];

  return (
    <div className="main-page-container">
      {/* Banner Superior Dinámico */}
      <section className="contacto-hero">
        <div className="contacto-overlay">
          <h1 className="contacto-title">{categoriaActual.titulo}</h1>
        </div>
      </section>

      {/* SECCIÓN 1: Cuadrícula Principal Dinámica */}
      <section className="main-productos-section">
        <div className="main-productos-grid">
          {categoriaActual.productos.map((item) => (
            <div 
              className="main-card" 
              key={item.id}
              onClick={() => navigate(item.path, { state: { producto: item } })}
              style={{ cursor: 'pointer' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                
                <div className="main-card-overlay">
                  <div className="eye-icon">👁</div>
                  <span className="main-card-cat">{item.category}</span>
                  <h3 className="main-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
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
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                
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