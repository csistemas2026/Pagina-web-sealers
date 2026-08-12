import React from 'react';
import '../../styles/conocenos/Section2.css';

const milestones = [
  { year: "1990", text: "Inicio de operaciones" },
  { year: "2000+", text: "Expansión y crecimiento" },
  { year: "2010+", text: "Estándares internacionales" },
  { year: "2016+", text: "Certificaciones y reconocimientos" },
  { year: "2020+", text: "Innovación y tecnología" },
  { year: "HOY", text: "Seguimos liderando el futuro" },
];

function Section2() {
  return (
    <section className="section2-container">
      <h2 className="section2-title">Una Trayectoria de Confianza</h2>
      <div className="timeline">
        {milestones.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="circle"></div>
            <h3 className="year">{item.year}</h3>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;