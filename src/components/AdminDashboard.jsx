
import React, { useState } from 'react';
import { getTokenExpiryTime } from '../utils/auth';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';
import './AdminDashboard.css';

const AdminDashboard = ({ products, setProducts, onLogout, currentUser }) => {
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', image: '', category: '', description: '' });

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleEdit = (product) => {
    setEditing(product.id);
    setForm(product);
  };

  const handleSave = () => {
    setProducts(products.map(p => p.id === editing ? { ...form, id: editing } : p));
    setEditing(null);
    setForm({ name: '', image: '', category: '', description: '' });
  };

  const handleAdd = () => {
    if (!form.name || !form.image) {
      alert('Please provide at least a name and image URL');
      return;
    }
    setProducts([
      ...products,
      { ...form, id: Date.now() }
    ]);
    setForm({ name: '', image: '', category: '', description: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // Get token expiry information
  const expiryTime = getTokenExpiryTime();
  const hoursRemaining = Math.floor(expiryTime / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((expiryTime % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="admin-dashboard-bg">
      <div className="admin-dashboard">
        <div className="admin-header-section">
          <img src="/vdfc-logo.svg" alt="VDFC Logo" className="admin-logo" />
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem', flexWrap:'wrap', gap:'1rem'}}>
          <div>
            <h2 style={{margin:0}}>Admin Dashboard</h2>
            {currentUser && (
              <p style={{margin:'0.5rem 0 0 0', fontSize:'0.9rem', color:'#4a5568'}}>
                🔐 Logged in as: <strong>{currentUser.username}</strong> | 
                Session expires in: <strong>{hoursRemaining}h {minutesRemaining}m</strong>
              </p>
            )}
          </div>
          <button onClick={onLogout} style={{background:'#d32f2f'}}>Logout (Clear JWT)</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="product-form">
          <CloudinaryUploadWidget onUpload={url => setForm({ ...form, image: url })} />
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category (e.g., Knee Belts)"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          {editing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleAdd}>Add Product</button>
          )}
        </div>
        <div className="admin-product-list">
          {filtered.map(product => (
            <div key={product.id} className="admin-product-card">
              <img src={product.image} alt={product.name} />
              <div style={{flex:1}}>
                <h4>{product.name}</h4>
                <p style={{fontSize:'0.85rem', color:'#3b82f6', fontWeight:'600', marginBottom:'0.25rem'}}>{product.category}</p>
                <p>{product.description?.substring(0, 80)}...</p>
                <div style={{display:'flex', gap:'0.5rem', marginTop:'0.75rem'}}>
                  <button onClick={() => handleEdit(product)} style={{flex:1}}>Edit</button>
                  <button onClick={() => handleDelete(product.id)} style={{background:'#d32f2f', flex:1}}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
