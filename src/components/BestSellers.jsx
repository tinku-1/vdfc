import React, { useRef, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './BestSellers.css';
import productsData from '../data/products.json';

const BestSellers = () => {
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = useMemo(() => {
    const map = {};
    productsData.forEach(p => {
      if (!map[p.category]) {
        map[p.category] = { name: p.category, image: p.image, count: 0 };
      }
      map[p.category].count++;
    });
    return Object.values(map).slice(0, 10);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="bestsellers-section" id="best-sellers">
      <div className="section-container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Our Range</span>
            <h2 className="section-title">Shop By Category</h2>
            <p className="section-subtitle">Browse our comprehensive collection of orthopedic rehabilitation products</p>
          </div>
          <div className="scroll-controls">
            <button className="scroll-ctrl-btn" onClick={() => scroll('left')} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="scroll-ctrl-btn" onClick={() => scroll('right')} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="categories-track" ref={scrollRef}>
          {categories.map((cat) => (
            <Link
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              key={cat.name}
              className={`cat-card ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <div className="cat-img-wrap">
                <img src={cat.image} alt={cat.name} className="cat-img" loading="lazy" />
                <div className="cat-overlay">
                  <span className="cat-explore">Explore →</span>
                </div>
              </div>
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <span className="cat-count">{cat.count} products</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-footer-link">
          <Link to="/products" className="view-all-btn">
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
