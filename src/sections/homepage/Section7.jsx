import React from 'react';
import '../../styles/homepage/Section7.css';
import transportes from '../../assets/images/transportes.png';
import courier from '../../assets/images/courier.png';
import inspeccion from '../../assets/images/inspeccion.png';
import pesca from '../../assets/images/pesca.png';
import transportevalores from '../../assets/images/transportevalores.png';


function Section7() {
  return (
    <section className="industry-section">
            <div className="industry-master-container">
                
                {/* Encabezado de la sección */}
                <h2 className="industry-main-title">Soluciones de Seguridad para <br />cada Industria</h2>
                <p className="industry-subtitle">Seguridad diseñadas para proteger operaciones críticas en los sectores más exigentes.</p>
                
                {/* Contenedor del Carrusel Interactivo */}
                <div className="industry-carousel-wrapper">
                    {/* Flecha Izquierda */}
                    <button className="ind-carousel-arrow arrow-left">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    {/* Contenedor de las Tarjetas (Cards) */}
                    <div className="ind-carousel-track">
                        
                        {/* Tarjeta 1: Transportes */}
                        <div className="ind-card">
                            <div className="ind-card-image">
                                <img src={transportes} alt="Transportes" />                                
                            </div>
                            <div className="ind-card-content">
                                <h3>Transportes</h3>
                                <span className="ind-card-line"></span>
                            </div>
                        </div>

                        {/* Tarjeta 2: Courier y Mensajería */}
                        <div className="ind-card">
                            <div className="ind-card-image">
                                <img src={courier} alt="Courier y Mensajería" />                                
                            </div>
                            <div className="ind-card-content">
                                <h3>Courier y <br />Mensajería</h3>
                                <span className="ind-card-line"></span>
                            </div>
                        </div>

                        {/* Tarjeta 3: Inspección y Certificación */}
                        <div className="ind-card">
                            <div className="ind-card-image">
                                <img src={inspeccion} alt="Inspección y Certificación" />
                            </div>
                            <div className="ind-card-content">
                                <h3>Inspección y <br />Certificación</h3>
                                <span className="ind-card-line"></span>
                            </div>
                        </div>

                        {/* Tarjeta 4: Pesca e Industria Acuícola */}
                        <div className="ind-card">
                            <div className="ind-card-image">
                                <img src={pesca} alt="Pesca e Industria Acuícola" />
                            </div>
                            <div className="ind-card-content">
                                <h3>Pesca e Industria <br />Acuícola</h3>
                                <span className="ind-card-line"></span>
                            </div>
                        </div>

                        {/* Tarjeta 5: Transportes de Valores */}
                        <div className="ind-card">
                            <div className="ind-card-image">
                                <img src={transportevalores} alt="Transportes de Valores" />
                            </div>
                            <div className="ind-card-content">
                                <h3>Transportes de <br />Valores</h3>
                                <span className="ind-card-line"></span>
                            </div>
                        </div>

                    </div>
                    
                    {/* Flecha Derecha */}
                    <button className="ind-carousel-arrow arrow-right">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                {/* Botón de acción inferior */}
                <a href="#" className="industry-btn">
                    DESCUBRE TU SOLUCIÓN DE SEGURIDAD <i className="fa-solid fa-chevron-right"></i>
                </a>

            </div>
        </section>
  );
}

export default Section7;