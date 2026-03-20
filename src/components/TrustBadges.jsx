import React from 'react';
import './TrustBadges.css';

const TrustBadges = () => {
  return (
    <section className="trust-badges">
      <div className="trust-header">
        <div className="trust-badge-wrapper">
          <div className="badge-outer-ring">
            <div className="badge-inner-ring">
              <div className="badge-core">
                <span className="badge-number">#1</span>
                <span className="badge-label">WORLD<br/>RECORD</span>
                <span className="badge-sublabel">ORTHOPEDIC<br/>PRODUCTS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="trust-title">
          <h2>Most trusted name in orthotic care</h2>
          <p>Acclaimed and recommended by healthcare professionals worldwide</p>
        </div>
      </div>

      <div className="trust-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Scientifically<br />Designed Products</h3>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>20+ Categories<br />250+ Products</h3>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Industry Leader<br />For 30+ Years</h3>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>5.7M+<br />Happy Customers</h3>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
