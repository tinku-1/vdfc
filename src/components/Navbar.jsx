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
            <img src="/vdfc-logo.jpeg" alt="VDFC Logo" className="brand-logo" />
            <div className="brand-text">
              <h2>VDFC</h2>
            </div>
          </Link>
          
          <div className="navbar-center">
            <Link to="/" className="nav-menu-link">Home</Link>
            <Link to="/products" className="nav-menu-link">All Products</Link>
            <Link to="/about" className="nav-menu-link">About Us</Link>
            <Link to="/contact" className="nav-menu-link">Contact</Link>
          </div>

          <form className="navbar-search" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
