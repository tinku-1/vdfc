import React, { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import './Products.css';

const categories = ['All Products', ...new Set(productsData.map(p => p.category))];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return productsData.filter(p => {
      const matchCat = selectedCategory === 'All Products' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSidebarOpen(false);
  };

  return (
    <div className="products-page">
      {/* Hero */}
      <div className="products-hero">
        <div className="products-hero-inner">
          <span className="section-eyebrow">Our Catalog</span>
          <h1>Orthopedic Product Range</h1>
          <p>Comprehensive medical-grade products for every rehabilitation need</p>
          <div className="hero-search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="hero-search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </div>

      <div className="products-layout">
        {/* Mobile filter toggle */}
        <button
          className="filter-toggle-btn"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
          </svg>
          Filter by Category
          <span className="filter-cat-badge">{selectedCategory === 'All Products' ? 'All' : selectedCategory}</span>
        </button>

        {/* Sidebar overlay */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* Sidebar */}
        <aside className={`products-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Categories</h3>
            <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>✕</button>
          </div>
          <div className="category-list">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat)}
              >
                {cat}
                <span className="cat-filter-count">
                  {cat === 'All Products' ? productsData.length : productsData.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Grid */}
        <main className="products-main">
          <div className="products-toolbar">
            <div>
              <h2 className="toolbar-title">{selectedCategory}</h2>
              <p className="toolbar-count">{filtered.length} products found</p>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map(product => (
                <div key={product.id} className="product-card" onClick={() => setModalProduct(product)}>
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                    <div className="product-hover-overlay">
                      <span className="quick-view-label">Quick View</span>
                    </div>
                  </div>
                  <div className="product-body">
                    <span className="product-category-tag">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description}</p>
                    <button className="enquire-btn">
                      Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or browse a different category</p>
              <button className="reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}>
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Product Modal */}
      {modalProduct && (
        <div className="pmodal-overlay" onClick={() => setModalProduct(null)}>
          <div className="pmodal" onClick={e => e.stopPropagation()}>
            <button className="pmodal-close" onClick={() => setModalProduct(null)}>✕</button>
            <div className="pmodal-img-wrap">
              <img src={modalProduct.image} alt={modalProduct.name} />
            </div>
            <div className="pmodal-info">
              <span className="product-category-tag">{modalProduct.category}</span>
              <h2>{modalProduct.name}</h2>
              <p>{modalProduct.description}</p>
              <div className="pmodal-actions">
                <button className="pmodal-enquire">📞 Enquire Now</button>
                <button className="pmodal-close-btn" onClick={() => setModalProduct(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
