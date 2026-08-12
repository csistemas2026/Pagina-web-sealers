import React from 'react';
import '../../styles/conocenos/Section1.css';
import videoBanner from '../../assets/images/videoconocenos.mp4';
function Section1() {
  return (
    <section className="section1-hero">
      <video 
        className="section1-video" 
        src={videoBanner} // O impórtalo si usas Vite
        autoPlay 
        loop 
        muted 
        playsInline
      />      
    </section>
  );
}

export default Section1;