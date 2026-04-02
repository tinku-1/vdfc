
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
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: 'Ortho Screw',
    image: 'https://via.placeholder.com/100x100?text=Ortho+Screw',
    shortDescription: 'High-grade stainless steel screw for orthopedic use.',
    description: 'This ortho screw is made from medical-grade stainless steel, designed for maximum strength and biocompatibility. Used in bone fixation procedures.'
  },
  {
    id: 2,
    name: 'Bone Plate',
    image: 'https://via.placeholder.com/100x100?text=Bone+Plate',
    shortDescription: 'Anatomically contoured bone plate.',
    description: 'The bone plate is contoured for anatomical fit, providing stable fixation for fracture healing. Made from lightweight titanium alloy.'
  },
  {
    id: 3,
    name: 'Hip Prosthesis',
    image: 'https://via.placeholder.com/100x100?text=Hip+Prosthesis',
    shortDescription: 'Modular hip replacement prosthesis.',
    description: 'A modular hip prosthesis system for total hip replacement, offering a range of sizes and options for optimal patient outcomes.'
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);
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
