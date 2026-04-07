import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <img src="/vdfc-logo-transparent.png" alt="VDFC Logo" className="footer-logo" />
        {/* <p className="footer-tagline">Leading Orthopedic Innovation Since 1990</p> */}
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#about">Corporate Profile</a></li>
            <li><a href="#leadership">Our Leadership</a></li>
            <li><a href="#rd">R&D</a></li>
            <li><a href="#csr">CSR</a></li>
            <li><a href="#news">Newsroom</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SHOP WITH US</h3>
          <ul>
            <li><a href="#cure">Cure</a></li>
            <li><a href="#sport">Sport</a></li>
            <li><a href="#life">Life</a></li>
          </ul>
          <h4>DOWNLOAD CATALOGUE</h4>
          <ul>
            <li><a href="#catalogue-cure">Cure</a></li>
            <li><a href="#catalogue-sport">Sport</a></li>
            <li><a href="#catalogue-life">Life</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#return">Return & Refund Policy</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
            <li><a href="#account">Account creation Policy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#cookie">Cookie Policy</a></li>
            <li><a href="#compliance">Compliances</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>HELP</h3>
          <ul>
            <li><a href="#account">My Account</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#cancel">Request for Cancelation</a></li>
            <li><a href="#return-req">Request for Return</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="#partner">Partner with Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#global">Ortho Global</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-subscribe">
        <div className="subscribe-container">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className="social-links">
          <a href="#facebook" aria-label="Facebook"><i className="social-icon">f</i></a>
          <a href="#instagram" aria-label="Instagram"><i className="social-icon">i</i></a>
          <a href="#youtube" aria-label="YouTube"><i className="social-icon">y</i></a>
          <a href="#linkedin" aria-label="LinkedIn"><i className="social-icon">in</i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ortho Surgical Products. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
