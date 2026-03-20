import React, { useState } from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span className="announcement-left">Free Shipping on orders above Rs 499*</span>
        <span className="announcement-right">
          Toll Free Number (Monday-Friday 9AM - 6PM) : 1800-1212-656 | support@orthosurgical.in
        </span>
        <button 
          className="announcement-close" 
          aria-label="Close announcement"
          onClick={() => setIsVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
