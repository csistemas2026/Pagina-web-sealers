import React, { useState, useEffect, useRef } from 'react';
import '../../styles/homepage/Section1.css';

// Importa aquí tu archivo de video
import videoHero from '../../assets/images/slider.mp4'; 

function Section1() {
  // 0 = Muestra tu CSS original con la imagen
  // 1 = Muestra el video
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const videoRef = useRef(null);

  // Muestra la imagen por 5 segundos y luego desliza hacia el video
  useEffect(() => {
    let timer;
    if (currentSlide === 0) {
      timer = setTimeout(() => {
        setAnimating(true);
        setTimeout(() => {
          setCurrentSlide(1);
          setAnimating(false);
        }, 600); // Duración del desplazamiento (0.6s)
      }, 5000);
    } else if (currentSlide === 1) {
      // Cuando entra al video por 2da o N-ésima vez, reinicia el tiempo y fuerza el play
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Captura posible bloqueo de autoplay del navegador
        });
      }
    }
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Al finalizar el video, regresa deslizando a la imagen
  const handleVideoEnded = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(0);
      setAnimating(false);
    }, 600);
  };

  return (
    <section className="hero-section" style={{ overflow: 'hidden' }}>
      
      {/* Capa 1: Imagen de Fondo (Usa el background de tu CSS) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('../../assets/images/inicio.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
          transform: currentSlide === 0 
            ? (animating ? 'translateX(-100%)' : 'translateX(0)') 
            : 'translateX(100%)',
          opacity: currentSlide === 0 ? 1 : 0,
          zIndex: 1
        }}
      />

      {/* Capa 2: Video de Fondo */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
          transform: currentSlide === 1 
            ? (animating ? 'translateX(-100%)' : 'translateX(0)') 
            : 'translateX(100%)',
          opacity: currentSlide === 1 ? 1 : 0,
          zIndex: 1
        }}
      >
        <video
          ref={videoRef}
          src={videoHero}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Contenido exactamente igual */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Título Principal */}
        <h1 className="hero-title">
          ¿SU CARGA <br />
          ESTÁ <span className="highlight-red">PROTEGIDA?</span>
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          EVITE ROBOS, PÉRDIDAS Y MANIPULACIONES NO AUTORIZADAS.
        </p>

        {/* Botón */}
        <button className="hero-button">
          VER SOLUCIONES DE SEGURIDAD
        </button>

      </div>
    </section>
  );
}

export default Section1;