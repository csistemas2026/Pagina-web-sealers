import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Banner from '../../components/Banner'; // Importamos el componente Banner
import blogPosts from '../../data/blogData'; // Ajusta la ruta a blogData.js si tu carpeta difiere
import imgBlog from '../../assets/images/blog1.png';
import '../../styles/blog/blog.css'; // Ajusta la ruta a tu CSS

export const BlogDetalle = () => {
  const { id } = useParams();

  // Scroll al tope cada vez que cambie el parámetro ID de la URL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Buscar el post según el ID recibido por la URL (o el primero por defecto)
  const post = blogPosts.find((item) => item.id === id) || blogPosts[0];

  // Obtener 3 publicaciones recomendadas excluyendo el post actual
  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  // Formatear párrafos y subtítulos marcados con (H2)
  const renderContent = (content) => {
    if (!content) return null;

    const paragraphs = content.split('\n\n');

    return paragraphs.map((block, index) => {
      const cleanBlock = block.trim();
      if (!cleanBlock) return null;

      if (cleanBlock.endsWith('(H2)')) {
        const titleText = cleanBlock.replace('(H2)', '').trim();
        return (
          <h4 key={index} className="blog-detalle-subtitle">
            {titleText}
          </h4>
        );
      }

      return <p key={index}>{cleanBlock}</p>;
    });
  };

  return (
    <div className="blog-page-container" key={id}>
      {/* Banner Superior */}
      <Banner title="Noticias y Actualidad" />

      {/* Tarjeta Principal del Detalle */}
      <div className="blog-detalle-wrapper">
        <div className="blog-detalle-card">
          
          {/* 1. Imagen Superior */}
          <div className="blog-detalle-img-container">
            <img 
              src={post.image && post.image !== '/images/blog/default.jpg' ? post.image : imgBlog} 
              alt={post.title} 
              className="blog-detalle-main-img" 
            />
          </div>

          {/* 2. Título */}
          <h2 className="blog-detalle-title">{post.title}</h2>

          {/* 3. Metadatos */}
          <div className="blog-detalle-meta">
            {post.date && <span>📅 {post.date}</span>}
            {post.location && <span>📍 {post.location}</span>}
          </div>

          {/* 4. Contenido en párrafos */}
          <div className="blog-detalle-section">
            {renderContent(post.descripcion)}
          </div>

          {/* 5. Compartir */}
          <div className="blog-detalle-share">
            <span>Compartir:</span>
            <div className="blog-social-icons">
              <a 
                href="https://www.linkedin.com/company/corporacionsealers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://www.facebook.com/CorporacionSealers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="social-icon-btn" title="X / Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>    
            </div>
          </div>

        </div>
      </div>

      {/* Sección Inferior: Encuentra más Publicaciones */}
      <section className="related-blog-section">
        <div className="related-header">
          <h2>Encuentra más Publicaciones</h2>
          <div className="red-divider"></div>
        </div>

        <div className="blog-grid">
          {relatedPosts.map((relPost) => (
            <Link to={`/blog/${relPost.id}`} className="blog-card-link" key={relPost.id}>
              <div className="blog-card">
                <div className="blog-img-container">
                  <img 
                    src={relPost.image && relPost.image !== '/images/blog/default.jpg' ? relPost.image : imgBlog} 
                    alt={relPost.title} 
                    className="blog-img" 
                  />
                </div>
                <div className="blog-text-content">
                  <span className="blog-category">{relPost.category}</span>
                  <h3 className="blog-title">{relPost.title}</h3>
                </div>
                <div className="blog-card-footer">
                  {relPost.date && <div className="blog-meta-item">📅 {relPost.date}</div>}
                  {relPost.location && <div className="blog-meta-item">📍 {relPost.location}</div>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetalle;