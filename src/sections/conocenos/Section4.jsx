import React from 'react';
import '../../styles/conocenos/Section4.css';
import img1 from '../../assets/images/1.png'; 
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';

const values = [
  { title: "Comunicación y Originalidad", img: img1 },
  { title: "Trabajo en Equipo", img: img2 },
  { title: "Responsabilidad y Puntualidad", img: img3 },
  { title: "Honestidad y Confianza", img: img4 }
];

function Section4() {
  return (
    <section className="section4-define">
      <h2 className="section4-main-title">Lo que nos define</h2>
      <div className="line-red"></div>
      <p className="section4-subtitle">Principios que guían nuestras decisiones y fortalecen la confianza de nuestros clientes.</p>
      
      <div className="values-grid">
        {values.map((val, index) => (
          <div key={index} className="value-card">
            <img src={val.img} alt={val.title} className="value-img" />
            <h3 className="value-title">{val.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section4;