import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tus componentes globales
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';


// Importa las páginas (asegúrate de que estas rutas sean correctas)
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
import Proximamente from './pages/Proximamente.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Se renderiza una sola vez */}
        
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
            <Route path="/seguridad" element={<Proximamente />} />


          </Routes>
        </main>
        
        <Footer /> {/* Se renderiza una sola vez */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
export default App;