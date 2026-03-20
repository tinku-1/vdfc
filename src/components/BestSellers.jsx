import React, { useRef } from 'react';
import './BestSellers.css';

const BestSellers = () => {
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: 'Abdominal Support',
      items: '17 items',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Ankle and Foot Support',
      items: '119 items',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Back Support',
      items: '39 items',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Elbow Support',
      items: '36 items',
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Knee Support',
      items: '111 items',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Neck Support',
      items: '46 items',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Wrist Support',
      items: '28 items',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Shoulder Support',
      items: '32 items',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="best-sellers" className="best-sellers">
      <div className="best-sellers-header">
        <h2>Best Sellers</h2>
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

      <div className="categories-scroll" ref={scrollContainerRef}>
        <div className="categories-container">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <div className="category-circle">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
