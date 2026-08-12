import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cursos/course.css';
import '../../styles/contacto/Section1.css';

/*import imgContenedores from '../../assets/images/planta.png'; // Reemplaza con tu imagen real
import imgPrecintos from '../../assets/images/tecnologia.png';     // Reemplaza con tu imagen real
import imgSeguridad from '../../assets/images/certificaciones.png';*/


const Course = () => {
  // Lista de cursos para renderizarlos de forma dinámica
  const coursesList = [
    {
      id: 1,
      category: 'Exportación y Aduana',
      title: 'Seguridad de Contenedores para Exportación',
      hours: '4 Horas',
      image: "",
    },
    {
      id: 2,
      category: 'Exportación y Aduana',
      title: 'Uso y Control de Precintos Aduaneros',
      hours: '4 Horas',
      image: "",
    },
    {
      id: 3,
      category: 'Seguridad Logística',
      title: 'Buenas prácticas de Seguridad Logística',
      hours: '4 Horas',
      image: "",
    },
    {
      id: 4,
      category: 'Exportación y Aduana',
      title: 'Seguridad de Contenedores para Exportación',
      hours: '4 Horas',
      image: "",
    },
    {
      id: 5,
      category: 'Exportación y Aduana',
      title: 'Uso y Control de Precintos Aduaneros',
      hours: '4 Horas',
      image: "",
    },
    {
      id: 6,
      category: 'Seguridad Logística',
      title: 'Buenas prácticas de Seguridad Logística',
      hours: '4 Horas',
      image: "",
    },
  ];


return (
    <div className="main-page-container">
      <section className="contacto-hero">
        <div className="contacto-overlay">
        <h1 className="contacto-title">Cursos</h1>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="courses-grid">
          {coursesList.map((course) => (
            /* 2. Envuelves la tarjeta en un Link que apunte a /cursos/id */
            <Link to={`/cursos/${course.id}`} className="course-card-link" key={course.id}>
              <div className="course-card">
                <div className="course-image-container">
                  <img src={course.image} alt={course.title} className="course-img" />
                  <div className="course-overlay-hover">
                    <span className="eye-icon">👁️</span>
                    <div className="red-line"></div>
                    <span className="ver-curso-text">Ver curso</span>
                  </div>
                </div>

                <div className="course-content">
                  <span className="course-category">{course.category}</span>
                  <h3 className="course-title">{course.title}</h3>
                </div>

                <div className="course-footer">
                  <div className="course-info-badge">
                    <span className="clock-icon">⏰</span> {course.hours}
                  </div>
                  <div className="course-info-badge">
                    <span className="cert-icon">📜</span> Certificado
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pagination-container">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
        </div>
      </section>
    </div>
  );
};

export default Course;