import React from 'react';
import './TrustBadges.css';

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.031-.138-2.03-.382-2.981z" />
      </svg>
    ),
    label: 'ISO Certified',
    sub: 'Quality Assured'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    label: 'Scientifically Designed',
    sub: 'Evidence-Based Products'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: '1M+ Customers',
    sub: 'Across India'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '5+ Years',
    sub: 'Industry Leader'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: '100+ Products',
    sub: '10+ Categories'
  },
];

const TrustBadges = () => {
  return (
    <section className="trust-section">
      <div className="trust-inner">
        <div className="trust-logo-col">
          <div className="trust-logo-wrap">
            <img src="/vdfc-logo.jpeg" alt="VDFC" className="trust-logo" />
          </div>
          <h2 className="trust-heading">Most Trusted in <span>Rehabilitation</span></h2>
          <p className="trust-desc">
            VDFC stands for Veracity Driven Fascinating Care — committed to quality orthopedic products that change lives.
          </p>
        </div>

        <div className="trust-badges-grid">
          {badges.map((b, i) => (
            <div key={i} className="trust-badge-card">
              <div className="tbadge-icon">{b.icon}</div>
              <div className="tbadge-info">
                <span className="tbadge-label">{b.label}</span>
                <span className="tbadge-sub">{b.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
