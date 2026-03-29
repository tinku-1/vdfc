import React from 'react';
import './About.css';

const About = () => {
  const milestones = [
    { year: '1990', title: 'Foundation', description: 'Company established with a vision to revolutionize orthopedic care' },
    { year: '2000', title: 'FDA Approval', description: 'Received FDA approval for our flagship product line' },
    { year: '2010', title: 'Global Expansion', description: 'Expanded operations to 50+ countries worldwide' },
    { year: '2020', title: 'Innovation Award', description: 'Recognized for groundbreaking orthopedic technology' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Committed to delivering only the highest quality medical products'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Continuously advancing orthopedic technology and solutions'
    },
    {
      icon: '💙',
      title: 'Care',
      description: 'Patient well-being at the heart of everything we do'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in healthcare'
    },
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <img src="/vdfc-logo.jpeg" alt="VDFC Logo" className="about-hero-logo" />
          <h1>About Ortho Surgical Products</h1>
          <p>Leading the way in orthopedic surgical innovation for over 30 years</p>
        </div>
      </div>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="intro-text">
            <h2>Our Story</h2>
            <p>
              Founded in 1990, Ortho Surgical Products has been at the forefront of orthopedic medical device 
              manufacturing and innovation. What started as a small operation with a handful of dedicated 
              professionals has grown into a global leader in orthopedic surgical solutions.
            </p>
            <p>
              Our commitment to excellence, innovation, and patient care has driven us to develop cutting-edge 
              products that improve the lives of millions of patients worldwide. We work closely with orthopedic 
              surgeons, healthcare professionals, and researchers to ensure our products meet the highest standards 
              of quality and effectiveness.
            </p>
          </div>
          <div className="intro-image">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9d42e3a88dd5?w=600&h=400&fit=crop&q=80" 
              alt="Medical facility"
            />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="timeline-container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>30+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries Worldwide</p>
          </div>
          <div className="stat-item">
            <h3>5.7M+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>250+</h3>
            <p>Products</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
