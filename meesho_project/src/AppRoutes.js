import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import SignUpForm from './pages/SignUpForm';
import SignIn from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import ProductPage from './Components/ProductPage';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import products from './Components/products';
import BuyNowPage from './Components/BuyNowPage';
import Confirmation from './Components/Confirmation';

function AppRoutes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load the user from localStorage on initial load
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignInComplete = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Store the user in localStorage
  };

  const handleDeleteAccount = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove the user from localStorage
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage products={products} />} />
      <Route path="/product/:productId" element={<ProductDetails products={products} />} />
      <Route path="/profile" element={<Profile user={user} handleDeleteAccount={handleDeleteAccount} />} />
      <Route path="/signin" element={<SignIn onSignInComplete={handleSignInComplete} />} />
      <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buynow" element={<BuyNowPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRoutes;
