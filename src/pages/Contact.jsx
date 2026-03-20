import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">          <img src="/vdfc-logo.svg" alt="VDFC Logo" className="contact-hero-logo" />          <h1>Get In Touch</h1>
          <p>We're here to help and answer any questions you might have</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="contact-subtitle">Fill out the form and our team will get back to you within 24 hours.</p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>123 Medical Plaza<br />Healthcare District<br />City, State 12345</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567<br />Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>info@orthosurgical.com<br />support@orthosurgical.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌐</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                <p>✓ Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <div className="map-placeholder">
          <p>📍 Visit our headquarters</p>
          <p className="map-address">123 Medical Plaza, Healthcare District, City, State 12345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
