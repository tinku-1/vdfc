import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onAdminClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <>
      {/* Top Navigation Bar with Logo, Search, and Icons */}
      <nav className="navbar-top">
        <div className="navbar-top-container">
          <Link to="/" className="navbar-brand">
            <img src="/vdfc-logo.svg" alt="VDFC Logo" className="brand-logo" />
            <div className="brand-text">
              <h2>Ortho Surgical</h2>
            </div>
          </Link>
          
          <form className="navbar-search" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Enter Keyword or Item" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

          <div className="navbar-actions">
            <button className="action-btn" aria-label="Saved Items">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Saved Items</span>
            </button>
            <button className="admin-btn-top" onClick={onAdminClick}>
              🔐 ADMIN
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Menu */}
      <nav className="navbar-menu-bar">
        <div className="navbar-menu-container">
          <Link to="/" className="menu-link">
            Home
          </Link>
          <Link to="/products" className="menu-link">
            All Products
          </Link>
          <Link to="/about" className="menu-link">
            About Us
          </Link>
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
