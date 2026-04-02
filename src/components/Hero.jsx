import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="/HOME1.png"
          alt="Orthopedic Support Products"
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        {/* <div className="hero-badge">
          <span className="badge-dot" />
          Trusted Since 1990
        </div> */}

        <h1 className="hero-title">
          Veracity Driven<br />
          <span className="hero-accent">Fascinating Care</span>
        </h1>

        {/* <p className="hero-subtitle">
          India's leading orthopedic rehabilitation brand — with 100+ scientifically engineered products designed for your recovery and well-being.
        </p> */}

        <div className="hero-actions">
          <Link to="/products" className="hero-btn-primary">
            Explore Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/about" className="hero-btn-secondary">
            Learn More
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">100+</span>
            <span className="stat-lbl">Products</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">10+</span>
            <span className="stat-lbl">Categories</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">2</span>
            <span className="stat-lbl">Years of Trust</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">10K+</span>
            <span className="stat-lbl">Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
