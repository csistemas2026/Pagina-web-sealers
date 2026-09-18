import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/homepage/Section2h.css'; // 👈 CAMBIO AQUÍ
import 'swiper/css/autoplay';

import planta from '../../assets/images/planta.png';
import tecnologia from '../../assets/images/tecnologia.png';
import certificaciones from '../../assets/images/certificaciones.png';
import soporteyasesoria from '../../assets/images/soporteyasesoria.png';
import cobertura from '../../assets/images/cobertura.png';
import equipo from '../../assets/images/equipo.png';

function Section2() {

  const navigate=useNavigate();

  const items = [
    { id: 1, title: 'Planta de Fabricación', img: planta },
    { id: 2, title: 'Tecnología de Punta', img: tecnologia },
    { id: 3, title: 'Certificaciones Internacionales', img: certificaciones },
    { id: 4, title: 'Soporte y Asesoría', img: soporteyasesoria },
    { id: 5, title: 'Cobertura Internacional', img: cobertura },
    { id: 6, title: 'Equipo Especializado', img: equipo }
  ];

  return (
    <section className="section2-contenedor">
      <div className="section2-contenido">
        <h2 className="section2-titulo">Lo que nos hace diferentes</h2>
        <span className='linea-titulo'></span>
        
        <h3 className="section2-experiencia">36 Años de Experiencia</h3>
        <p className="section2-descripcion">Hemos protegido <strong>millones de envíos</strong> y operaciones logísticas en Perú y Latinoamérica.</p>
        
       <Swiper
  modules={[Autoplay, Navigation]}
  navigation={false}
  loop={true}
  speed={800}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  className="section2-carousel-wrapper"
>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="carousel-card">
                <div className="icon-circle">
                  <img src={item.img} alt={item.title} className="card-img-custom" />
                </div>
                <span className="card-title">{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="section2-btn" onClick={()=> navigate('/conocenos')}>
          CONOCE NUESTRA HISTORIA <span className="btn-arrow"></span>
        </button>
      </div>
    </section>
  );
}

export default Section2;