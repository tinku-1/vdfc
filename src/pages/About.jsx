import React from 'react';
import './About.css';

const About = () => {
  const milestones = [
    { year: '2023', title: 'Foundation', description: 'Company established with a vision to revolutionize orthopedic care' },
    { year: '2024', title: 'Product Launch', description: 'Successfully launched our primary line of orthopedic surgical products' },
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
          <h1>About Ortho Surgical Products</h1>
          <p>An emerging leader in orthopedic surgical innovation</p>
        </div>
      </div>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="intro-text">
            <h2>Our Story</h2>
            <p>
              Recently founded, Ortho Surgical Products is an emerging leader in orthopedic medical device 
              manufacturing and innovation. We are a dedicated team of professionals committed to providing 
              top-quality orthopedic surgical solutions.
            </p>
            <p>
              Our commitment to excellence, innovation, and patient care drives us to deliver reliable 
              products that improve the lives of patients. We work closely with healthcare professionals 
              to ensure our products meet high standards of quality and effectiveness.
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
            <h3>New</h3>
            <p>Emerging Brand</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Committed</p>
          </div>
          <div className="stat-item">
            <h3>10M+</h3>
            <p>Patients Targeted</p>
          </div>
          <div className="stat-item">
            <h3>75+</h3>
            <p>Products</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
