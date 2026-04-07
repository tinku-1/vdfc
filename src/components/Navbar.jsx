import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Announcement Bar */}
      {/* <div className="announcement-bar">
        <span>🏥 India's Most Trusted Rehabilitation Brand &nbsp;|&nbsp; 100+ Products &nbsp;|&nbsp; Free Shipping on Orders above ₹999</span>
      </div> */}

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="brand-logo-wrapper">
              <img src="/vdfc-logo-transparent.png" alt="VDFC Logo" className="brand-logo" />
            </div>
            <div className="brand-text">
              <span className="brand-name">VDFC</span>
              <span className="brand-tagline">Ortho Surgical</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
              >
                {link.label}
                <span className="nav-indicator" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="navbar-right">
            {/* Search Toggle */}
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(prev => !prev)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Admin Button */}
            <button className="admin-btn" onClick={onAdminClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Admin
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`search-bar-wrapper ${searchOpen ? 'open' : ''}`}>
          <div className="search-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon-inner">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-field"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear">✕</button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={() => setIsMenuOpen(false)}>
            <img src="/vdfc-logo-transparent.png" alt="VDFC" className="brand-logo" style={{ height: '36px' }} />
            <div className="brand-text">
              <span className="brand-name">VDFC</span>
              <span className="brand-tagline">Ortho Surgical</span>
            </div>
          </Link>
          <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-nav-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mobile-admin-btn" onClick={() => { setIsMenuOpen(false); onAdminClick(); }}>
            🔐 Admin Portal
          </button>
        </div>
        <div className="mobile-menu-footer">
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@vdfc.in</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
