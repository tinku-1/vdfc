# JWT Authentication - Backend Setup Guide

## Current Implementation

The current JWT authentication is implemented on the **frontend only** for demonstration purposes. While it provides the structure and flow of JWT authentication, it's **not production-secure** because:

1. Tokens are generated client-side (visible in browser)
2. Secret key is exposed in frontend code
3. No server-side validation of credentials
4. Susceptible to client-side tampering

## Production Backend Setup (Recommended)

For production deployment, implement a proper backend API with JWT authentication:

---

## Option 1: Node.js + Express Backend

### 1. Install Dependencies

```bash
npm install express jsonwebtoken bcryptjs cors dotenv
```

### 2. Create Backend Server (`server.js`)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-in-production';
const JWT_EXPIRY = '24h';

// In production, use a database (MongoDB, PostgreSQL, etc.)
const users = [
  {
    id: 1,
    username: 'admin',
    // Password: admin123 (hashed with bcrypt)
    passwordHash: '$2a$10$8K1p/a0dL3LKkLOkz3K2Zu7qZ6LT5IaLKF0KxV3fKqF1Y9hG.7QvW',
    role: 'admin'
  }
];

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id,
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );

    res.json({ 
      success: true,
      token,
      user: {
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify token endpoint
app.get('/api/auth/verify', (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ 
      success: true,
      user: {
        username: decoded.username,
        role: decoded.role
      }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Protected route middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected product routes
app.get('/api/products', authenticateToken, (req, res) => {
  // Return products
  res.json({ products: [] });
});

app.post('/api/products', authenticateToken, (req, res) => {
  // Create product
  res.json({ success: true });
});

app.put('/api/products/:id', authenticateToken, (req, res) => {
  // Update product
  res.json({ success: true });
});

app.delete('/api/products/:id', authenticateToken, (req, res) => {
  // Delete product
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Create `.env` file

```env
JWT_SECRET=your-super-secret-key-minimum-32-characters-long
PORT=5000
NODE_ENV=production
```

### 4. Update Frontend (`src/utils/auth.js`)

Replace the frontend authentication with API calls:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const authenticateUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: 'Network error' };
  }
};

export const verifyToken = async (token) => {
  try {
    const response = await fetch(`${API_URL}/auth/verify`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) return null;
    
    const data = await response.json();
    return data.user;
  } catch (error) {
    return null;
  }
};
```

### 5. Add Vite Environment Variable

Create `.env.local`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Option 2: Python + Flask Backend

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
import os

app = Flask(__name__)
CORS(app)

JWT_SECRET = os.getenv('JWT_SECRET', 'your-secret-key')
JWT_EXPIRY = 24  # hours

users = {
    'admin': generate_password_hash('admin123')
}

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if username not in users or not check_password_hash(users[username], password):
        return jsonify({'error': 'Invalid credentials'}), 401
    
    token = jwt.encode({
        'username': username,
        'role': 'admin',
        'exp': datetime.utcnow() + timedelta(hours=JWT_EXPIRY)
    }, JWT_SECRET, algorithm='HS256')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {'username': username, 'role': 'admin'}
    })

@app.route('/api/auth/verify', methods=['GET'])
def verify():
    token = request.headers.get('Authorization', '').replace('Bearer ', '')
    
    try:
        decoded = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
        return jsonify({'success': True, 'user': decoded})
    except:
        return jsonify({'error': 'Invalid token'}), 401

if __name__ == '__main__':
    app.run(port=5000)
```

---

## Security Best Practices

### 1. **Use HTTPS in Production**
Always use HTTPS to prevent token interception.

### 2. **Store Tokens Securely**
- Use httpOnly cookies (best) or localStorage
- Never store in plain text or sessionStorage

### 3. **Implement Token Refresh**
```javascript
// Backend: Return both access and refresh tokens
{
  accessToken: 'short-lived-token',  // 15 minutes
  refreshToken: 'long-lived-token'   // 7 days
}

// Frontend: Refresh before expiry
if (tokenExpiresIn < 5 * 60 * 1000) {
  await refreshAccessToken();
}
```

### 4. **Hash Passwords Properly**
```javascript
// Using bcrypt
const bcrypt = require('bcryptjs');
const passwordHash = await bcrypt.hash(password, 10);
```

### 5. **Validate All Inputs**
```javascript
const { body, validationResult } = require('express-validator');

app.post('/api/auth/login', [
  body('username').isAlphanumeric().isLength({ min: 3 }),
  body('password').isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // ... proceed with login
});
```

### 6. **Rate Limiting**
```javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requests per window
});

app.post('/api/auth/login', loginLimiter, ...);
```

---

## Database Integration

### MongoDB Example

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Use in login
const user = await User.findOne({ username });
```

---

## Deployment Checklist

- [ ] Move JWT_SECRET to environment variables
- [ ] Enable HTTPS/SSL
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Use proper password hashing (bcrypt)
- [ ] Set up database for user management
- [ ] Implement token refresh mechanism
- [ ] Add logging and monitoring
- [ ] Set secure cookie flags (httpOnly, secure, sameSite)
- [ ] Implement CSRF protection

---

## Testing the Backend

```bash
# Start backend
node server.js

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Test protected route
curl http://localhost:5000/api/products \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Current Frontend Implementation

The current frontend JWT implementation in `src/utils/auth.js` is designed to be easily switchable to backend API calls. Simply update the `authenticateUser` and `verifyToken` functions to make API requests to your backend.

---

**For production use, always implement proper backend authentication!**
