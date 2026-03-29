import React, { useRef, useMemo } from 'react';
import './ShopByActivity.css';
import productsData from '../data/products.json';

const ShopByActivity = () => {
  const scrollContainerRef = useRef(null);

  // Map activities to product categories
  const activityToCategoryMap = {
    'Recovery': 'Abdominal Belts',
    'Rehabilitation': 'Cervical Products',
    'Support': 'Rib Belts',
    'Stability': 'Shoulder & Arm',
    'Protection': 'Ankle Splints',
    'Flexibility': 'Knee Belts',
    'Posture': 'Lumbar Belts',
    // 'Wellness': 'Wrist Splints',
    'Mobility': 'General Therapy',
    // 'Comfort': 'Walker Products'
  };

  const activities = useMemo(() => {
    return Object.entries(activityToCategoryMap).map(([activityName, categoryName], index) => {
      const product = productsData.find(p => p.category === categoryName);
      return {
        id: index + 1,
        name: activityName,
        image: product ? product.image : 'https://via.placeholder.com/500x400?text=' + activityName
      };
    });
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="shop-by-activity" className="shop-by-activity">
      <div className="activity-header">
        <h2>Shop By Activity</h2>
        <div className="scroll-buttons">
          <button className="scroll-btn scroll-btn-left" onClick={() => scroll('left')} aria-label="Scroll left">
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span className="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
          <button className="scroll-btn scroll-btn-right" onClick={() => scroll('right')} aria-label="Scroll right">
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span className="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="activity-scroll" ref={scrollContainerRef}>
        <div className="activity-container">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <img src={activity.image} alt={activity.name} />
              <div className="activity-overlay">
                <h3>{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByActivity;
