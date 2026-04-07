import React, { useRef, useMemo } from 'react';
import './ShopByActivity.css';
import productsData from '../data/products.json';

const activityMap = [
  { name: 'Recovery', category: 'Abdominal Belts', icon: '💊' },
  { name: 'Rehabilitation', category: 'Cervical Products', icon: '🏥' },
  { name: 'Support', category: 'Rib Belts', icon: '🩺' },
  { name: 'Stability', category: 'Shoulder & Arm', icon: '💪' },
  { name: 'Protection', category: 'Ankle Splints', icon: '🦶' },
  { name: 'Flexibility', category: 'Knee Belts', icon: '🦵' },
  { name: 'Posture', category: 'Lumbar Belts', icon: '🧘' },
  { name: 'Mobility', category: 'Walker & Aids', icon: '🚶' },
];

const ShopByActivity = () => {
  const scrollRef = useRef(null);

  const activities = useMemo(() => {
    return activityMap.map(a => {
      const product = productsData.find(p => p.category === a.category);
      return { ...a, image: product ? product.image : null };
    });
  }, []);

  const scroll = dir => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="activity-section" id="shop-by-activity">
      <div className="section-container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Find your fit</span>
            <h2 className="section-title">Choose By Activity</h2>
            <p className="section-subtitle">Select your condition or lifestyle to find the right support</p>
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

        <div className="activity-track" ref={scrollRef}>
          {activities.map((item) => (
            <div key={item.name} className="activity-card">
              {item.image ? (
                <img src={item.image} alt={item.name} className="activity-img" loading="lazy" />
              ) : (
                <div className="activity-placeholder">
                  <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                </div>
              )}
              <div className="activity-content">
                <span className="activity-icon-badge">{item.icon}</span>
                <h3 className="activity-name">{item.name}</h3>
                <p className="activity-cat">{item.category}</p>
                <button className="activity-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByActivity;
