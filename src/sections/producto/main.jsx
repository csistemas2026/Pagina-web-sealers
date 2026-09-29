import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import '../../styles/producto/main.css';
import { baseDeDatosCategorias, solucionesSecundarias } from '../../data/productosData';

function Main() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 9;

  // Clave de la categoría activa recibida desde la URL (ej: 'candados-electronicos')
  const categoriaKey = id || 'alta-seguridad';
  
  // Obtener la categoría actual desde la base de datos
  const categoriaActual = baseDeDatosCategorias[categoriaKey] || {
    titulo: 'Catálogo de Productos',
    productos: []
  };
  
  const listaProductos = categoriaActual.productos || [];

  // Al cambiar el parámetro 'id' de la URL, reiniciamos la página y hacemos scroll arriba
  useEffect(() => {
    setPaginaActual(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Paginación
  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina);
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = listaProductos.slice(indicePrimerProducto, indiceUltimoProducto);

  // Ir al detalle individual de un producto (GRAN COLOSO, ESCORPIÓN, etc.)
  const handleCardClick = (item) => {
    const targetPath = item.path || `/subproductos/prodetalles/${item.id}`;
    navigate(targetPath, { state: { producto: item } });
  };

  // Cambiar de categoría desde la sección "Encuentra más Soluciones para ti"
  const handleSolutionClick = (item) => {
    const targetCategory = item.categoryKey || item.id;
    if (targetCategory) {
      navigate(`/productos/${targetCategory}`);
    }
  };

  // Excluimos la categoría actual para que no aparezca en las opciones de abajo
  const solucionesFiltradas = (solucionesSecundarias || []).filter((item) => {
    return item.id !== categoriaKey && item.categoryKey !== categoriaKey;
  });

  return (
    <div className="main-page-container">
      {/* Banner Superior Dinámico */}
      <Banner title={categoriaActual.titulo || "Catálogo de Productos"} />

      {/* Botón de retroceso */}
      <div className="detalle-back-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <svg 
            className="btn-back-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Volver atrás</span>
        </button>
      </div>

      {/* SECCIÓN 1: Cuadrícula Principal Dinámica */}
      <section className="main-productos-section">
        {productosPaginados.length > 0 ? (
          <div className="main-productos-grid">
            {productosPaginados.map((item) => (
              <div 
                className="main-card" 
                key={item.id}
                onClick={() => handleCardClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="main-card-img-box">
                  <img src={item.img} alt={item.title} />
                  
                  <div className="main-card-overlay">
                    <div className="eye-icon">👁</div>
                    <span className="main-card-cat">{item.category}</span>
                    <h3 className="main-card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
            <p>No se encontraron productos disponibles en esta categoría.</p>
          </div>
        )}

        {/* Paginación Dinámica */}
{totalPaginas > 1 && (
  <div className="main-pagination">
    {Array.from({ length: totalPaginas }, (_, index) => {
      const numeroPagina = index + 1;
      return (
        <span
          key={numeroPagina}
          className={`page-dot ${paginaActual === numeroPagina ? 'active' : ''}`}
          onClick={() => {
            setPaginaActual(numeroPagina);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // <-- Agrega esto
          }}
          style={{ cursor: 'pointer' }}
        >
          {numeroPagina}
        </span>
      );
    })}
  </div>
)}
      </section>

      {/* SECCIÓN 2: "Encuentra más Soluciones para ti" */}
      <section className="more-solutions-section">
        <div className="solutions-header">
          <h2>Encuentra más Soluciones para ti</h2>
          <div className="red-divider"></div>
        </div>

        <div className="solutions-grid">
          {solucionesFiltradas.map((item) => (
            <div 
              className="main-card" 
              key={item.id}
              onClick={() => handleSolutionClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="main-card-img-box">
                <img src={item.img} alt={item.title} />
                
                <div className="main-card-overlay">
                  <div className="eye-icon">👁</div>
                  <span className="main-card-cat">{item.category}</span>
                  <h3 className="main-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Main;