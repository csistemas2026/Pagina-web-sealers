import React from 'react';
import Header from '../components/Header'; // Importa el que ya existe
import Footer from '../components/Footer'; // Importa el que ya existe
import WhatsAppButton from '../components/WhatsAppButton';
import Section1 from '../sections/conocenos/Section1.jsx';
import Section2 from '../sections/conocenos/Section2.jsx';
import Section3 from '../sections/conocenos/Section3.jsx';
import Section4 from '../sections/conocenos/Section4.jsx';
import Section5 from '../sections/conocenos/Section5.jsx';
import Section6 from '../sections/conocenos/Section6.jsx';
import Section7 from '../sections/conocenos/Section7.jsx';
import Section8 from '../sections/conocenos/Section8.jsx';

// Aquí importarás tus futuras secciones específicas de "Conócenos"
// import HistoriaSection from '../sections/conocenos/HistoriaSection';

function Conocenos() {
  return (
    <div className="conocenos-page"> 
      <main>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
      </main>      
      <WhatsAppButton />
    </div>
  );
}

export default Conocenos;