import React from 'react';
import '../../styles/conocenos/Section5.css';

import ccl from '../../assets/images/ccl.png';
import chancay from '../../assets/images/chancay.png';
import adex from '../../assets/images/adex.png';
import sociedadnacional from '../../assets/images/sociedadnacional.png';

function Section5() {
  return (
    <section className="section5-container">
      {/* Es indispensable este contenedor (logos-grid) para que el CSS funcione */}
      <div className="logos-grid"> 
        <div className="logo-wrapper">
          <img src={ccl} alt="Cámara de Comercio de Lima" className="logo-img" />
        </div>
        <div className="logo-wrapper">
          <img src={chancay} alt="Cámara de Comercio de Chancay" className="logo-img" />
        </div>
        <div className="logo-wrapper">
          <img src={adex} alt="ADEX" className="logo-img" />
        </div>
        <div className="logo-wrapper">
          <img src={sociedadnacional} alt="Sociedad Nacional de Industrias" className="logo-img" />
        </div>
      </div>
    </section>
  );
}

export default Section5;