import React from 'react';
import './DailySupport.css';

const DailySupport = () => {
  const categories = [
    {
      id: 1,
      name: 'CHAPPELS 1',
      items: 'Premium Product',
      image: '/products/chapples/CHAPPLES1.jpeg'
    },
    {
      id: 2,
      name: 'CHAPPELS 2',
      items: 'Premium Product',
      image: '/products/chapples/CHAPPLES2.jpeg'
    },
    {
      id: 3,
      name: 'Pregnancy',
      items: '4 items',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Sleep',
      items: '15 items',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Travel',
      items: '2 items',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Kids',
      items: '11 items',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section id="daily-support" className="daily-support">
      <div className="daily-support-header">
        <h2>Shop for Daily Support</h2>
      </div>

      <div className="daily-support-grid">
        {categories.map((category) => (
          <div key={category.id} className="card">
            <div className="image">
              <img src={category.image} alt={category.name} />
            </div>
            <span className="title">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailySupport;
