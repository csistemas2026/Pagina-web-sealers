import React from 'react';
import { Link } from 'react-router-dom';
import fondopro from '../../assets/images/fondopro.jpg';
import blog1 from '../../assets/images/blog1.png'; // O la imagen que uses para las noticias del foro
import '../../styles/blog/blog.css'; // Asegúrate de ajustar la ruta si tu archivo css está en otra carpeta

export const Blog = () => {
  // Lista de publicaciones de ejemplo para renderizar la cuadrícula
  const blogPosts = [
    {
      id: 1,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
    {
      id: 2,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
    {
      id: 3,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
    {
      id: 4,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
    {
      id: 5,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
    {
      id: 6,
      category: 'Noticias',
      title: 'Seguridad en la Cadena Logística Exterior',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: blog1,
    },
  ];

  return (
    <div className="blog-page-container">
      {/* Banner Superior Opcional (si mantienes la línea estética de tus otras páginas) */}
      <section className="section-banner">
        <div className="contacto-overlay">
          <h1 className="contacto-title">Blog y Noticias</h1>
        </div>
      </section>

      {/* Contenido Principal de Blog */}
      <div className="blog-content-wrapper">
        <div className="blog-grid">
          {blogPosts.map((post) => (
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

        {/* Paginación Inferior */}
        <div className="blog-pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;