import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/categoria/menu.css';
import altaseguridad from '../../assets/images/altaseguridad.jpg';
import fondopro from '../../assets/images/fondopro.jpg';
import paltaseguridad from '../../assets/images/paltaseguridad.jpg';
import pseguridad from '../../assets/images/pseguridad.jpg';
import pindicativo from '../../assets/images/pindicativo.jpg';
import kitespecializado from '../../assets/images/kitespecializado.jpg';
import bag from '../../assets/images/bag.jpg';

function Menu() {
  const navigate = useNavigate();

  // Lista de elementos con su respectiva ruta de destino para el detalle
  const itemsMenu = [
    { id: 1, title: 'ALTA SEGURIDAD', category: 'Precintos de', image: paltaseguridad, conOverlay: true, ruta: '/productos/alta-seguridad' },
    { id: 2, title: 'SEGURIDAD', category: 'Precintos de', image: pseguridad, conOverlay: true, destacado: true, ruta: '/productos/seguridad' },
    { id: 3, title: 'INDICATIVOS', category: 'Precintos', image: pindicativo, conOverlay: true, ruta: '/productos/indicativos' },
    { id: 4, title: 'ESPECIALIZADOS', category: 'Kits', image: kitespecializado, conOverlay: true, ruta: '/productos/especializados' },
    { id: 5, title: 'BIG BAG', category: 'Bolsa', image: bag, conOverlay: true, ruta: '/productos/big-bag' },
  ];

  return (
    
    <div className="menu-page-container">
      <section className="section-banner">
      <div className="contacto-overlay">
        <h1 className="contacto-title">Productos</h1>
      </div>
    </section>
      <section className="menu-productos-section">
        <div className="menu-productos-grid">
          {itemsMenu.map((item) => (
            <div 
              className={`menu-card ${item.destacado ? 'destacada' : ''}`} 
              key={item.id}
              onClick={() => navigate(item.ruta)} // <-- Redirige al hacer clic en la tarjeta
              style={{ cursor: 'pointer' }}
            >
              <div className="menu-card-img-box">
                <img src={item.image} alt={item.title} />
                
                {item.conOverlay && (
                  <div className="menu-card-overlay">
                    <div className="eye-icon">
                      <i className="fa-solid fa-eye">👁</i>
                    </div>
                    <span className="menu-card-cat">{item.category}</span>
                    <h3 className="menu-card-title">{item.title}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="menu-pagination">
          <span className="page-dot active">1</span>
          <span className="page-dot">2</span>
          <span className="page-dot">3</span>
          <span className="page-dot">4</span>
        </div>
      </section>
    </div>
  );
}

export default Menu;