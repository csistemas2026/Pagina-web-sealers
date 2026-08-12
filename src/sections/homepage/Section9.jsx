import React from 'react';
import '../../styles/homepage/Section9.css';
import { blogArticles } from '../../data/blogData'; // 👈 Importamos tu variable central de datos

function Section9() {
  return (
    <section className="blog-section">
      <div className="blog-master-container">
        
        {/* Encabezado de la sección */}
        <h2 className="blog-main-title">Últimas Publicaciones</h2>
        <span className="blog-title-line"></span>

        {/* Rejilla de Publicaciones Dinámicas */}
        <div className="blog-grid">
          
          {/* 👈 Recorremos el array para renderizar cada tarjeta automáticamente */}
          {blogArticles.map((article) => (
            <article className="blog-card" key={article.id}>
              <div className="blog-card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="blog-card-content">
                <span className="blog-category">{article.category}</span>
                <h3 className="blog-card-title">{article.title}</h3>
                
                <div className="blog-card-meta">
                  <span className="meta-location">
                    <i className="fa-solid fa-location-dot"></i> {article.location}
                  </span>
                  <span className="meta-date">
                    <i className="fa-regular fa-clock"></i> {article.date}
                  </span>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Texto informativo y botón de acción */}
        <p className="blog-footer-text">Entérate de todas nuestras publicaciones</p>
        <a href="#" className="blog-btn">
          ESTO Y MÁS EN NUESTRO BLOG <i className="fa-solid fa-chevron-right"></i>
        </a>

      </div>
    </section>
  );
}

export default Section9;