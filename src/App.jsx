
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isAuthenticated, removeAuthToken, getCurrentUser, getTokenExpiryTime } from './utils/auth';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import productsData from './data/products.json';
import './App.css';

function App() {
  const [products, setProducts] = useState(productsData);
  const [adminMode, setAdminMode] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check for existing JWT token on component mount
  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        const user = getCurrentUser();
        setCurrentUser(user);
        setAdminLoggedIn(true);
        
        // Set up auto-logout when token expires
        const expiryTime = getTokenExpiryTime();
        if (expiryTime > 0) {
          const timeoutId = setTimeout(() => {
            handleLogout();
            alert('Session expired. Please login again.');
          }, expiryTime);
          
          return () => clearTimeout(timeoutId);
        }
      }
    };

    checkAuth();
  }, []);

  // Check authentication status periodically (every minute)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (adminLoggedIn && !isAuthenticated()) {
        handleLogout();
        alert('Session expired. Please login again.');
      }
    }, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [adminLoggedIn]);

  const handleLogin = (user) => {
    setAdminLoggedIn(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    removeAuthToken();
    setAdminLoggedIn(false);
    setAdminMode(false);
    setCurrentUser(null);
  };

  if (adminMode) {
    if (!adminLoggedIn) {
      return <AdminLogin onLogin={handleLogin} />;
    }
    return (
      <AdminDashboard 
        products={products} 
        setProducts={setProducts} 
        onLogout={handleLogout}
        currentUser={currentUser}
      />
    );
  }

  return (
    <BrowserRouter>
      <div className="app-bg">
        <Navbar onAdminClick={() => setAdminMode(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
