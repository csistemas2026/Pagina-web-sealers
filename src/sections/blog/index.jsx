import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner'; // Importamos el componente Banner
import '../../styles/blog/blog.css';
import blogPosts from '../../data/blogData.js';

export const Blog = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const postsPorPagina = 9;

  // Uso directo del arreglo importado blogArticles
  const listaPosts = blogPosts || [];
  const totalPaginas = Math.ceil(listaPosts.length / postsPorPagina);
  const indiceUltimoPost = paginaActual * postsPorPagina;
  const indicePrimerPost = indiceUltimoPost - postsPorPagina;
  const postsPaginados = listaPosts.slice(indicePrimerPost, indiceUltimoPost);

  return (
    <div className="blog-page-container">
      {/* Banner Superior con el nuevo componente Banner */}
      <Banner title="Blog y Noticias" />

      {/* Contenido Principal de Blog */}
      <div className="blog-content-wrapper">
        <div className="blog-grid">
          {postsPaginados.map((post) => (
            <Link to={`/blog/${post.id}`} className="blog-card-link" key={post.id}>
              <div className="blog-card">
                {/* Imagen de la tarjeta */}
                <div className="blog-img-container">
                  <img src={post.image} alt={post.title} className="blog-img" />
                </div>

                {/* Contenido de texto */}
                <div className="blog-text-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-title">{post.title}</h3>
                </div>

                {/* Pie de la tarjeta (Fecha y Ubicación) */}
                <div className="blog-card-footer">
                  <div className="blog-meta-item">
                    <span className="meta-icon">📅</span> {post.date}
                  </div>
                  <div className="blog-meta-item">
                    <span className="meta-icon">📍</span> {post.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Paginación Dinámica de 9 en 9 */}
        {totalPaginas > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPaginas }, (_, index) => {
              const numeroPagina = index + 1;
              return (
                <button
                  key={numeroPagina}
                  className={`page-btn ${paginaActual === numeroPagina ? 'active' : ''}`}
                  onClick={() => setPaginaActual(numeroPagina)}
                >
                  {numeroPagina}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;