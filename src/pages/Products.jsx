import React, { useState } from 'react';
import './Products.css';
import productsData from '../data/products.json';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueCategories = [...new Set(productsData.map(p => p.category))];
  const categories = [
    { id: 'all', name: 'All Products' },
    ...uniqueCategories.map(cat => ({ id: cat, name: cat }))
  ];

  const products = productsData.map(p => ({
    ...p,
    features: ['High Quality', 'Durable', 'Reliable Support']
  }));

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* <div className="products-hero">
        <div className="products-hero-content">
          <h1>Our Product Catalog</h1>
          <p>Comprehensive range of orthopedic surgical products and medical devices</p>
        </div>
      </div> */}

      <div className="products-container">
        <aside className="products-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Search Products</h3>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </aside>

        <main className="products-main">
          <div className="products-header">
            <h2>
              {selectedCategory === 'all'
                ? 'All Products'
                : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="products-count">{filteredProducts.length} products found</p>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <button className="add-to-cart-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
