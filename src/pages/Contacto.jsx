import React from 'react';
import Header from '../components/Header'; // Importa el que ya existe
import Footer from '../components/Footer'; // Importa el que ya existe
import WhatsAppButton from '../components/WhatsAppButton';

import Section1 from '../sections/contacto/Section1.jsx';
import Section2 from '../sections/contacto/Section2.jsx';

// Aquí importarás tus futuras secciones específicas de "Conócenos"
// import HistoriaSection from '../sections/conocenos/HistoriaSection';

const Contacto = () => {
  return (
    <>
      <Section1 />      
      <Section2 />  
    </>
  );
};

export default Contacto;