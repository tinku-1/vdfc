// JWT Authentication Utility
// Note: This is a frontend-only implementation for demo purposes.
// In production, JWT tokens should be generated and validated on a secure backend server.

const SECRET_KEY = 'ortho-surgical-secret-key-2026'; // In production, this should be on backend only
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Base64 URL-safe encoding
 */
const base64UrlEncode = (str) => {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

/**
 * Base64 URL-safe decoding
 */
const base64UrlDecode = (str) => {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) {
    str += '=';
  }
  return atob(str);
};

/**
 * Simple HMAC-like signature (for demo purposes)
 * In production, use proper cryptographic libraries on the backend
 */
const createSignature = (data) => {
  const hash = btoa(data + SECRET_KEY);
  return base64UrlEncode(hash);
};

/**
 * Create JWT Token
 * @param {Object} payload - User data to encode in token
 * @returns {string} JWT token
 */
export const createToken = (payload) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const now = Date.now();
  const tokenPayload = {
    ...payload,
    iat: now, // Issued at
    exp: now + TOKEN_EXPIRY // Expiration time
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload));
  const signature = createSignature(encodedHeader + '.' + encodedPayload);

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

/**
 * Verify JWT Token
 * @param {string} token - JWT token to verify
 * @returns {Object|null} Decoded payload if valid, null if invalid
 */
export const verifyToken = (token) => {
  try {
    if (!token) return null;

    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, signature] = parts;

    // Verify signature
    const expectedSignature = createSignature(encodedHeader + '.' + encodedPayload);
    if (signature !== expectedSignature) {
      console.error('Invalid token signature');
      return null;
    }

    // Decode payload
    const payload = JSON.parse(base64UrlDecode(encodedPayload));

    // Check expiration
    if (payload.exp && Date.now() > payload.exp) {
      console.error('Token expired');
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};

/**
 * Store token in localStorage
 */
export const setAuthToken = (token) => {
  localStorage.setItem('admin_token', token);
};

/**
 * Get token from localStorage
 */
export const getAuthToken = () => {
  return localStorage.getItem('admin_token');
};

/**
 * Remove token from localStorage
 */
export const removeAuthToken = () => {
  localStorage.removeItem('admin_token');
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if valid token exists
 */
export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;

  const payload = verifyToken(token);
  return payload !== null;
};

/**
 * Get current user data from token
 * @returns {Object|null} User data or null
 */
export const getCurrentUser = () => {
  const token = getAuthToken();
  if (!token) return null;

  return verifyToken(token);
};

/**
 * Get remaining time until token expires
 * @returns {number} Milliseconds until expiration, or 0 if expired/invalid
 */
export const getTokenExpiryTime = () => {
  const token = getAuthToken();
  if (!token) return 0;

  const payload = verifyToken(token);
  if (!payload || !payload.exp) return 0;

  const remaining = payload.exp - Date.now();
  return remaining > 0 ? remaining : 0;
};

/**
 * Authenticate user with credentials
 * @param {string} username 
 * @param {string} password 
 * @returns {Object} { success: boolean, token?: string, error?: string }
 */
export const authenticateUser = (username, password) => {
  // In production, this should be an API call to your backend
  // Backend should verify credentials and return a JWT token
  
  // Demo credentials (should be validated on backend in production)
  const VALID_USERS = {
    admin: 'admin123'
  };

  if (VALID_USERS[username] === password) {
    const token = createToken({
      username,
      role: 'admin',
      userId: '1'
    });

    return {
      success: true,
      token,
      user: { username, role: 'admin' }
    };
  }

  return {
    success: false,
    error: 'Invalid username or password'
  };
};
