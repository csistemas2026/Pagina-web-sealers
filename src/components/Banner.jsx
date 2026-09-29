import React from 'react';
import '../styles/Banner.css';

const PageBanner = ({ title, bgImage }) => {
  // Si envías una imagen diferente por prop, la usa; si no, toma la por defecto del CSS
  const bannerStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  return (
    <div className="page-banner-container" style={bannerStyle}>
      <div className="page-banner-overlay"></div>
      <h1 className="page-banner-title">{title}</h1>
    </div>
  );
};

export default PageBanner;