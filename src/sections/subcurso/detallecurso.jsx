import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/contacto/Section1.css';
import fondopro from '../../assets/images/fondopro.jpg';
import imgContenedores from '../../assets/images/planta.png';
import imgPrecintos from '../../assets/images/tecnologia.png';
import imgSeguridad from '../../assets/images/certificaciones.png';
import instructorImg from '../../assets/images/fondopro.jpg'; // Reemplaza con la foto real del instructor si la tienes
import '../../styles/subcurso/detallecurso.css'; // Tu archivo de estilos dedicado

export const detallecurso = () => {
  const { id } = useParams();

  // Base de datos de cursos simulada (puedes expandirla con todos tus cursos)
  const coursesDatabase = {
    1: {
      id: 1,
      category: 'Exportación y Aduana',
      title: 'SEGURIDAD DE CONTENEDOR PARA EXPORTACIÓN',
      image: "",
      duration: '4 Horas',
      modality: 'Virtual',
      foro: '25 Alumnos',
      certificado: 'Al culminar',
      descripcion: 'Estas formaciones, pretenden configurar un estándar de capacitación para el sector eléctrico de forma que todo trabajador operativo que preste servicios en el citado sector, cumpla los criterios y requisitos formativos establecidos en el acuerdo.',
      objetivo: 'Estas formaciones, pretenden configurar un estándar de capacitación para el sector eléctrico de forma que todo trabajador operativo que preste servicios en el citado sector, cumpla los criterios y requisitos formativos establecidos en el acuerdo.',
      dirigidoA: 'A todo tipo de trabajadores que trabajen o quieran trabajar de manera operativa en el sector de las Telecomunicaciones.',
      material: 'Libro ó ppt en pdf virtual.',
      ubicacion: 'Ate',
      instructor: {
        name: 'Juan Oroche Nolarbe',
        bio: 'Especialista en Seguridad Logística y Control de Carga con más de 16 años de experiencia en el sector.',
        photo: instructorImg
      }
    },
    2: {
      id: 2,
      category: 'Exportación y Aduana',
      title: 'USO Y CONTROL DE PRECINTOS ADUANEROS',
      image: "",
      duration: '4 Horas',
      modality: 'Virtual',
      foro: '20 Alumnos',
      certificado: 'Al culminar',
      descripcion: 'Capacitación especializada en el manejo correcto de precintos aduaneros y normativas vigentes de control físico para mercancías.',
      objetivo: 'Garantizar el conocimiento técnico en la colocación, verificación y control de precintos de seguridad según estándares internacionales.',
      dirigidoA: 'Personal de almacén, operadores logísticos y supervisores de aduanas.',
      material: 'Manual digital y guías técnicas.',
      ubicacion: 'Lima / Virtual',
      instructor: {
        name: 'Juan Oroche Nolarbe',
        bio: 'Especialista en Seguridad Logística y Control de Carga con más de 16 años de experiencia en el sector.',
        photo: instructorImg
      }
    }
  };

  // Obtener el curso actual según el ID (si no existe, muestra el ID 1 por defecto)
  const course = coursesDatabase[id] || coursesDatabase[1];

  // Lista de cursos para la sección inferior "Encuentra más cursos para ti"
  const relatedCourses = [
    { id: 1, title: 'Buenas prácticas de Seguridad Logística', category: 'Seguridad Logística', hours: '4 Horas', image: "" },
    { id: 2, title: 'Buenas prácticas de Seguridad Logística', category: 'Seguridad Logística', hours: '4 Horas', image: "" },
    { id: 1, title: 'Buenas prácticas de Seguridad Logística', category: 'Seguridad Logística', hours: '4 Horas', image: "" }
  ];

  return (
    <div className="courses-page-container">
      <section className="contacto-hero">
       <div className="contacto-overlay">
       <h1 className="contacto-title">{course.category}</h1>
        </div>
      </section>

      {/* Contenido Principal del Detalle */}
      <div className="detalle-main-content">
        <div className="detalle-container-card">
          
          {/* Imagen Grande del Curso */}
          <div className="detalle-image-wrapper">
            <img src={course.image} alt={course.title} className="detalle-main-img" />
          </div>

          <div className="detalle-body-grid">
            {/* Columna Izquierda: Título, Descripción e Info */}
            <div className="detalle-left-column">
              <h2 className="detalle-course-title">{course.title}</h2>
              <p className="detalle-description">{course.descripcion}</p>

              {/* Badges de Información */}
              <div className="detalle-badges-row">
                <div className="detalle-badge"><span className="icon">⏰</span> Duración: <br/><strong>{course.duration}</strong></div>
                <div className="detalle-badge"><span className="icon">💻</span> Modalidad: <br/><strong>{course.modality}</strong></div>
                <div className="detalle-badge"><span className="icon">👥</span> Foro: <br/><strong>{course.foro}</strong></div>
                <div className="detalle-badge"><span className="icon">📜</span> Certificado: <br/><strong>{course.certificado}</strong></div>
              </div>

              {/* Botones de Acción */}
              <div className="detalle-action-buttons">
                <a href="#solicitar" className="btn-solicitar">
                  <span className="whatsapp-icon">🟢</span> Solicitar información
                </a>
                <a href="#descargar" className="btn-descargar">
                  <span className="pdf-icon">📥</span> Descargar temario
                </a>
              </div>
            </div>

            {/* Columna Derecha: Cajas de Objetivo, Dirigido a, Material, Ubicación e Instructor */}
            <div className="detalle-right-column">
              <div className="info-box-blue">
                <span className="box-label">Objetivo:</span>
                <p>{course.objetivo}</p>
              </div>

              <div className="info-box-blue">
                <span className="box-label">Dirigido a:</span>
                <p>{course.dirigidoA}</p>
              </div>

              <div className="info-box-blue horizontal">
                <span className="box-label">Material:</span>
                <p>{course.material}</p>
              </div>

              <div className="info-box-blue horizontal">
                <span className="box-label">Ubicación:</span>
                <p>{course.ubicacion}</p>
              </div>

              {/* Tarjeta del Instructor */}
              <div className="instructor-card">
                <img src={course.instructor.photo} alt={course.instructor.name} className="instructor-avatar" />
                <div className="instructor-info">
                  <span className="instructor-tag">Instructor:</span>
                  <h4 className="instructor-name">{course.instructor.name}</h4>
                  <div className="instructor-line"></div>
                  <p className="instructor-bio">{course.instructor.bio}</p>
                </div>
              </div>

              {/* Redes Sociales / Compartir */}
              <div className="share-section">
                <span>Compartir:</span>
                <div className="social-icons">
                  <a href="#linkedin">in</a>
                  <a href="#facebook">f</a>
                  <a href="#twitter">𝕏</a>
                  <a href="#instagram">📷</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Inferior: Encuentra más Cursos para ti */}
      <section className="related-courses-section">
        <div className="related-header">
          <h2>Encuentra más Cursos para ti</h2>
          <div className="red-divider"></div>
        </div>

        <div className="courses-grid">
          {relatedCourses.map((relCourse, idx) => (
            <Link to={`/cursos/${relCourse.id}`} className="course-card-link" key={idx}>
              <div className="course-card">
                <div className="course-image-container">
                  <img src={relCourse.image} alt={relCourse.title} className="course-img" />
                  <div className="course-overlay-hover">
                    <span className="eye-icon">👁️</span>
                    <div className="red-line"></div>
                    <span className="ver-curso-text">Ver curso</span>
                  </div>
                </div>

                <div className="course-content">
                  <span className="course-category">{relCourse.category}</span>
                  <h3 className="course-title">{relCourse.title}</h3>
                </div>

                <div className="course-footer">
                  <div className="course-info-badge">
                    <span className="clock-icon">⏰</span> {relCourse.hours}
                  </div>
                  <div className="course-info-badge">
                    <span className="cert-icon">📜</span> Certificado
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default detallecurso;