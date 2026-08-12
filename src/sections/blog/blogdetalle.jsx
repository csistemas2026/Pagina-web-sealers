import React from 'react';
import { useParams, Link } from 'react-router-dom';
import fondopro from '../../assets/images/fondopro.jpg';
import imgBlog from '../../assets/images/blog1.png';
import '../../styles/blog/blog.css';

export const BlogDetalle = () => {
  const { id } = useParams();

  // Base de datos simulada para los detalles de cada post
  const postsDatabase = {
    1: {
      id: 1,
      category: 'Noticias',
      title: 'SEGURIDAD EN LA CADENA LOGÍSTICA DE COMERCIO',
      date: '22 de junio de 2026',
      location: 'MINCETUR - San Isidro',
      image: imgBlog,
      lead: 'Corporación Sealer\'s S.A., fue uno de los auspiciadores del VI FORO LOGÍSTICO, se llevó acabo el 16 de Junio del 2022 en las instalaciones del BTH HOTEL. Tuvimos la presencia de importantes empresarios importadores y exportadores logísticos. Además, el evento nos permitió conocer el panorama actual, la agenda de facilitación y los avances de los proyectos futuros que nos permitirán mejorar como empresa y país.',
      sections: [
        {
          subtitle: 'DESARROLLO',
          text1: 'A raíz del Covid-19 hemos visto la importancia de que los países cuenten con sistemas de logística y transporte que permitan seguir abasteciendo de alimentos y bienes de primera necesidad a la población, en especial a los más pobres", sostuvo.',
          text2: 'Fue luego que el presidente del gremio, Julio Pérez Alván, indicara que un gran desafío es la modernización y optimización de los procesos logísticos, los cuales demandan un trabajo público-privado de las empresas y autoridades relacionadas con el comercio internacional.',
          text3: 'Por eso solicitamos a los representantes del gobierno, una vez más, coherencia entre lo que dicen y hacen, tanto en el Perú como en el exterior. Los empresarios y el país en su conjunto necesitamos predictibilidad y confianza", dijo.',
          text4: 'Por eso solicitamos a los representantes del gobierno, una vez más, coherencia entre lo que dicen y hacen, tanto en el Perú como en el exterior. Los empresarios y el país en su conjunto necesitamos predictibilidad y confianza", dijo.'
        }
      ]
    }
  };

  // Obtener el post actual según el ID (si no existe, usa el ID 1 por defecto)
  const post = postsDatabase[id] || postsDatabase[1];

  // Artículos para la sección inferior "Encuentra más Publicaciones"
  const relatedPosts = [
    { id: 1, category: 'Noticias', title: 'Seguridad en la Cadena Logística Exterior', date: '22 de junio de 2026', location: 'MINCETUR - San Isidro', image: imgBlog },
    { id: 2, category: 'Noticias', title: 'Seguridad en la Cadena Logística Exterior', date: '22 de junio de 2026', location: 'MINCETUR - San Isidro', image: imgBlog },
    { id: 3, category: 'Noticias', title: 'Seguridad en la Cadena Logística Exterior', date: '22 de junio de 2026', location: 'MINCETUR - San Isidro', image: imgBlog }
  ];

  return (
    <div className="blog-page-container">
      {/* Banner Superior */}
      <section className="contacto-hero">
          <div className="contacto-overlay">
          <h1 className="contacto-title">Noticias y Actualidad</h1>
        </div>
      </section>

      {/* Contenedor Principal del Detalle (Tarjeta Blanca) */}
      <div className="blog-detalle-wrapper">
        <div className="blog-detalle-card">
          
          {/* Imagen Grande */}
          <div className="blog-detalle-img-container">
            <img src={post.image} alt={post.title} className="blog-detalle-main-img" />
          </div>

          {/* Título Principal */}
          <h2 className="blog-detalle-title">{post.title}</h2>

          {/* Metadatos (Fecha y Ubicación) */}
          <div className="blog-detalle-meta">
            <span>📅 {post.date}</span>
            <span>📍 {post.location}</span>
          </div>

          {/* Párrafo de Entrada */}
          <p className="blog-detalle-lead">{post.lead}</p>

          {/* Bloque de Desarrollo */}
          {post.sections.map((sec, index) => (
            <div key={index} className="blog-detalle-section">
              <h4 className="blog-detalle-subtitle">{sec.subtitle}</h4>
              <p>{sec.text1}</p>
              <p>{sec.text2}</p>
              <p>{sec.text3}</p>
              <p>{sec.text4}</p>
            </div>
          ))}

          {/* Compartir en Redes Sociales */}
          <div className="blog-detalle-share">
            <span>Compartir:</span>
            <div className="blog-social-icons">
    <a href="https://www.linkedin.com/company/corporacionsealers" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.facebook.com/CorporacionSealers/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Facebook">
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
          {relatedPosts.map((relPost, idx) => (
            <Link to={`/blog/${relPost.id}`} className="blog-card-link" key={idx}>
              <div className="blog-card">
                <div className="blog-img-container">
                  <img src={relPost.image} alt={relPost.title} className="blog-img" />
                </div>
                <div className="blog-text-content">
                  <span className="blog-category">{relPost.category}</span>
                  <h3 className="blog-title">{relPost.title}</h3>
                </div>
                <div className="blog-card-footer">
                  <div className="blog-meta-item">📅 {relPost.date}</div>
                  <div className="blog-meta-item">📍 {relPost.location}</div>
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