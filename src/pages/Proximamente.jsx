import React from 'react';
import { Link } from 'react-router-dom'; // O usa <a href="/"> si usas enlaces tradicionales
import '../styles/proximamente/proximamente.css'; // Ajusta la ruta de tu CSS según tu estructura

function Proximamente() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-card">
        {/* Icono animado o decorativo */}
        <div className="coming-soon-icon">
          <i className="fa-solid fa-person-digging"></i>
        </div>

        {/* Textos principales */}
        <span className="coming-soon-badge">Sitio en desarrollo</span>
        <h1 className="coming-soon-title">Próximamente</h1>
        <p className="coming-soon-description">
          Estamos trabajando arduamente para traerte contenido nuevo y mejoras increíbles. ¡Muy pronto habilitaremos esta sección!
        </p>

        {/* Botón de retorno al menú */}
        <Link to="/" className="coming-soon-btn">
          <i className="fa-solid fa-arrow-left"></i> Volver al Menú Principal
        </Link>
      </div>
    </div>
  );
}

export default Proximamente;