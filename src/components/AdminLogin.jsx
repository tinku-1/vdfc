import React, { useState } from 'react';
import { authenticateUser, setAuthToken } from '../utils/auth';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Authenticate user and get JWT token
      const result = authenticateUser(username, password);

      if (result.success) {
        // Store JWT token in localStorage
        setAuthToken(result.token);
        
        // Show success message briefly
        setError('');
        
        // Notify parent component of successful login
        onLogin(result.user);
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-bg">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <img src="/vdfc-logo.svg" alt="VDFC Logo" className="admin-logo" />
        <h2>Admin Login</h2>
        <p className="login-subtitle">Secure JWT Authentication</p>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          disabled={isLoading}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
        
        {error && <div className="error-msg">{error}</div>}
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Authenticating...' : 'Login with JWT'}
        </button>
        
        <div className="login-info">
          <p>🔐 JWT Token-based Authentication</p>
          <p className="demo-credentials">
            Demo: <strong>admin</strong> / <strong>admin123</strong>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
