import React, { useRef } from 'react';
import './ShopByActivity.css';

const ShopByActivity = () => {
  const scrollContainerRef = useRef(null);

  const activities = [
    {
      id: 1,
      name: 'Aerobics',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Athletics',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Badminton',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Cricket',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Cycling',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Football',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'Running',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=400&fit=crop'
    },
    {
      id: 10,
      name: 'Tennis',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&h=400&fit=crop'
    }
  ];

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
