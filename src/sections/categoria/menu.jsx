import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../../components/Banner.jsx';
import '../../styles/categoria/menu.css';
import { solucionesSecundarias } from '../../data/productosData';

function Menu() {
  const navigate = useNavigate();

  // Si tienes solucionesSecundarias definidas en productosData.js, las usamos directamente.
  // En caso de que desees enriquecerlas o asegurar propiedades específicas para la grilla de Menu:
  const itemsMenu = solucionesSecundarias || [];

  return (
    <div className="menu-page-container">
      {/* Banner Principal */}
      <PageBanner title="Productos" />

      <section className="menu-productos-section">
        <div className="menu-productos-grid">
          {itemsMenu.map((item) => (
            <div 
              className={`menu-card ${item.destacado ? 'destacada' : ''}`} 
              key={item.id}
              onClick={() => navigate(item.path)} // Redirige a /subproductos/:id según lo definido en productosData
              style={{ cursor: 'pointer' }}
            >
              <div className="menu-card-img-box">
                <img src={item.img || item.image} alt={item.title} />
                
                <div className="menu-card-overlay">
                  <div className="eye-icon">
                    <i className="fa-solid fa-eye">👁</i>
                  </div>
                  <span className="menu-card-cat">{item.category}</span>
                  <h3 className="menu-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {itemsMenu.length > 9 && (
          <div className="menu-pagination">
            <span className="page-dot active">1</span>
            <span className="page-dot">2</span>
          </div>
        )}
      </section>
    </div>
  );
}

export default Menu;