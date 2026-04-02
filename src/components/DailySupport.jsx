import React from 'react';
import './DailySupport.css';

const categories = [
  { id: 1, name: 'Chappal Support', label: 'Footwear', image: '/products/chapples/CHAPPLES1.jpeg', color: '#eff6ff' },
  { id: 2, name: 'Ortho Chappal', label: 'Orthopedic', image: '/products/chapples/CHAPPLES2.jpeg', color: '#f0fdf4' },
  { id: 3, name: 'Pregnancy Care', label: 'Maternity', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop', color: '#fdf4ff' },
  { id: 4, name: 'Sleep Support', label: 'Comfort', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop', color: '#fff7ed' },
  { id: 5, name: 'Travel Aid', label: 'Mobility', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop', color: '#f0f9ff' },
  { id: 6, name: 'Paediatric', label: 'Kids', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop', color: '#fefce8' },
];

const DailySupport = () => {
  return (
    <section className="daily-section" id="daily-support">
      <div className="section-container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Everyday Wellness</span>
            <h2 className="section-title">Shop for Daily Support</h2>
            <p className="section-subtitle">Products designed for every stage of life and every condition</p>
          </div>
        </div>

        <div className="daily-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="daily-card" style={{ '--card-bg': cat.color }}>
              <div className="daily-img-wrap">
                <img src={cat.image} alt={cat.name} className="daily-img" loading="lazy" />
              </div>
              <div className="daily-info">
                <span className="daily-label">{cat.label}</span>
                <h3 className="daily-name">{cat.name}</h3>
                <button className="daily-explore-btn">
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySupport;
