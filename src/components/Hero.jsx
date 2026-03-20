import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=800&fit=crop" 
          alt="Orthopedic Support" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-main-title">
            LIGHT AS AIR
            <br />
            <span className="hero-title-emphasis">STRONG AS PRO</span>
          </h1>
          <p className="hero-tagline">EXPLORE THE ORTHO SURGICAL RANGE!</p>
        </div>
        
        <div className="hero-cta">
          <div className="cta-badge">
            <h3>SURGICAL SUPPORT PRO</h3>
            <button className="hero-cta-btn" onClick={scrollToProducts}>
              EXPLORE ALL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
