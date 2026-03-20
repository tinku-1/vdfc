import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onProductClick }) => (
  <div className="product-list">
    {products.map((product) => (
      <div
        key={product.id}
        className="product-card"
        onClick={() => onProductClick(product)}
      >
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.description?.substring(0, 80)}...</p>
      </div>
    ))}
  </div>
);

export default ProductList;
