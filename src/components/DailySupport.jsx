import React from 'react';
import './DailySupport.css';

const DailySupport = () => {
  const categories = [
    {
      id: 1,
      name: 'Office',
      items: '5 items',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Posture',
      items: '3 items',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop'
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
          <div key={category.id} className="parent">
            <div className="support-card">
              <div className="content-box">
                <span className="card-title">{category.name}</span>
                <p className="card-content">{category.items}</p>
                <span className="see-more">View Products</span>
              </div>
              <div className="date-box">
                <img src={category.image} alt={category.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailySupport;
