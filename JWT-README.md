# JWT Authentication - Quick Reference

## 🔐 JWT Features Implemented

### Current Implementation (Frontend Demo)
- ✅ JWT token generation on login
- ✅ Token storage in localStorage
- ✅ Automatic token validation
- ✅ Token expiration (24 hours)
- ✅ Auto-logout on token expiry
- ✅ Session monitoring
- ✅ User info display in dashboard
- ✅ Secure token format (Header.Payload.Signature)

### Login Credentials
- **Username:** `admin`
- **Password:** `admin123`

---

## 📋 How It Works

### 1. Login Flow
```
User enters credentials
  ↓
authenticateUser() validates credentials
  ↓
JWT token generated with user data + expiry
  ↓
Token stored in localStorage
  ↓
User redirected to Admin Dashboard
```

### 2. Token Structure
```
Header.Payload.Signature

Example:
eyJhbGc...  .  eyJ1c2Vy...  .  aGFzaC4uLg==
  (header)      (user data)      (signature)
```

### 3. Session Management
- Token is checked on app load
- Periodic validation every 60 seconds
- Auto-logout when token expires
- Shows remaining session time in dashboard

---

## 🚀 Using JWT Authentication

### For Developers

The JWT utility functions are in `src/utils/auth.js`:

```javascript
import { 
  authenticateUser,
  isAuthenticated,
  getCurrentUser,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  getTokenExpiryTime
} from './utils/auth';

// Login
const result = authenticateUser('admin', 'admin123');
if (result.success) {
  setAuthToken(result.token);
}

// Check if authenticated
if (isAuthenticated()) {
  const user = getCurrentUser();
  console.log(user); // { username, role, iat, exp }
}

// Get remaining time
const timeLeft = getTokenExpiryTime(); // milliseconds

// Logout
removeAuthToken();
```

---

## 🔒 Security Notes

### Current Implementation (Frontend Only)
⚠️ **Not production-secure** - For demo purposes only

**Limitations:**
- Token generated client-side (visible in browser DevTools)
- Secret key exposed in frontend code
- No server validation
- Can be tampered with client-side

### For Production
✅ **Use backend API** - See [JWT-BACKEND-SETUP.md](JWT-BACKEND-SETUP.md)

**Production Requirements:**
- Backend server (Node.js, Python, etc.)
- Database for user management
- Server-side token generation
- Secure secret key storage
- HTTPS/SSL
- Rate limiting
- Password hashing (bcrypt)

---

## 📊 Token Details

### Token Payload
```json
{
  "username": "admin",
  "role": "admin",
  "userId": "1",
  "iat": 1708819200000,  // Issued at timestamp
  "exp": 1708905600000   // Expiration timestamp
}
```

### Token Expiry
- **Default:** 24 hours
- **Configurable:** Change `TOKEN_EXPIRY` in `src/utils/auth.js`
- **Display:** Shows in dashboard header
- **Auto-logout:** User logged out when expired

---

## 🧪 Testing JWT

### Test in Browser DevTools

```javascript
// Open Console (F12)

// Check current token
localStorage.getItem('admin_token')

// Decode token (copy token from above)
const token = 'YOUR_TOKEN_HERE';
const [header, payload, sig] = token.split('.');
JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))

// Remove token (force logout)
localStorage.removeItem('admin_token')
```

### Test Expiration

1. Login as admin
2. Note session time in dashboard
3. Wait for expiration (or change TOKEN_EXPIRY to 60000 for 1 minute test)
4. You'll be auto-logged out with alert

---

## 🛠️ Customization

### Change Token Expiry

Edit `src/utils/auth.js`:

```javascript
// Change from 24 hours to 1 hour
const TOKEN_EXPIRY = 1 * 60 * 60 * 1000;

// Or 7 days
const TOKEN_EXPIRY = 7 * 24 * 60 * 60 * 1000;
```

### Add More Users

Edit `authenticateUser()` in `src/utils/auth.js`:

```javascript
const VALID_USERS = {
  admin: 'admin123',
  manager: 'manager456',
  editor: 'editor789'
};
```

### Custom Token Data

Edit `createToken()` call in `authenticateUser()`:

```javascript
const token = createToken({
  username,
  role: 'admin',
  userId: '1',
  email: 'admin@example.com',  // Add custom fields
  permissions: ['read', 'write', 'delete']
});
```

---

## 📱 Mobile/Multi-Tab Behavior

### localStorage Behavior
- ✅ Persists across page refreshes
- ✅ Persists when browser closes/reopens
- ✅ Shared across tabs (same origin)
- ❌ Not shared across different browsers
- ❌ Not shared across devices

### Cross-Tab Sync
Token is shared across browser tabs automatically via localStorage.

---

## 🐛 Troubleshooting

### "Session expired" immediately after login
- Check system clock is correct
- Ensure TOKEN_EXPIRY is positive number
- Clear localStorage and try again

### Token not persisting
- Check browser allows localStorage
- Check not in incognito/private mode
- Check localStorage quota not exceeded

### Can't login after logout
- Clear browser cache
- Check localStorage is empty
- Hard refresh (Ctrl+Shift+R)

---

## 📚 Learn More

- **Backend Setup:** [JWT-BACKEND-SETUP.md](JWT-BACKEND-SETUP.md)
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **JWT.io:** https://jwt.io/ (decode/verify tokens)

---

## ✅ Production Checklist

Before deploying with backend:

- [ ] Implement backend API (Node.js/Python/PHP)
- [ ] Move secret key to environment variables
- [ ] Use HTTPS/SSL
- [ ] Hash passwords with bcrypt
- [ ] Add rate limiting on login endpoint
- [ ] Implement token refresh mechanism
- [ ] Add input validation
- [ ] Set up database for users
- [ ] Add logging and monitoring
- [ ] Test token expiration handling
- [ ] Implement CSRF protection
- [ ] Add security headers

---

**Current Status:** ✅ Frontend JWT demo ready | ⚠️ Backend required for production
