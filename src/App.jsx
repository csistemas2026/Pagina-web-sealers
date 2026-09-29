import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importa tus componentes globales
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importa las páginas
import HomePage from './pages/HomePage';
import Conocenos from './pages/Conocenos';
import Contacto from './pages/Contacto';
import Categoria from './sections/categoria/menu';
import Producto from './sections/producto/main';
import Prodetalles from './sections/producto/prodetalles';
import Cursos from './sections/cursos/course';
import DetalleCurso from './sections/subcurso/detallecurso';
import Blog from './sections/blog/index';
import BlogDetalle from './sections/blog/blogdetalle';
import Sostenibilidad from './pages/Sostenibilidad.jsx';

// Secciones de Seguridad Electrónica
import SeccionSeguridadElectronica from './sections/seguridad/seguridadelectronica.jsx';
import CandadosElectronicos from './sections/seguridad/candadoselectronicos.jsx';

// Componente que fuerza el scroll arriba al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/categorias" element={<Categoria />} />
            <Route path="/productos/:id" element={<Producto />} />
            <Route path="/subproductos/prodetalles/:id" element={<Prodetalles />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<DetalleCurso />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetalle />} />
            <Route path="/sostenibilidad" element={<Sostenibilidad />} />
            
            {/* Rutas de Seguridad */}
            <Route path="/seguridad" element={<SeccionSeguridadElectronica />} />
            <Route path="/seguridad/candados-electronicos" element={<CandadosElectronicos />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;