import React from 'react';
// Importación corregida de estilos
import '../../styles/conocenos/Section6.css';

// Importa tus imágenes aquí (ajusta los nombres según tus archivos reales)
import iso28000 from '../../assets/images/iso28000.png';
import iso9001 from '../../assets/images/iso9001.png';
import iso17712 from '../../assets/images/iso17712.png';
import marcaPeru from '../../assets/images/marcaperu.png';

function Section6() {
  return (
    <section className="certificaciones-container">
      <h2 className="certificaciones-title">Certificaciones</h2>
      <p className="certificaciones-subtitle">
        Respaldamos cada solución con estándares internacionales que garantizan calidad, seguridad y confianza en cada operación
      </p>
      
      <div className="certificaciones-grid">
        <img src={iso28000} alt="ISO 28000" />
        <img src={iso9001} alt="ISO 9001:2015" />
        <img src={iso17712} alt="ISO 17712" />
        <img src={marcaPeru} alt="Marca Perú" />
      </div>
    </section>
  );
}

export default Section6;