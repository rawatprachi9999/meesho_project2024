import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import SignUpForm from './pages/SignUpForm';
import SignIn from './pages/SignIn';
import LandingPage from './pages/LandingPage';
import ProductPage from './Components/ProductPage';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import products from './Components/products';

function AppRoutes({ user, setUser, handleDeleteAccount }) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage products={products} />} />
      <Route path="/product/:productId" element={<ProductDetails products={products} />} />
      <Route path="/profile" element={<Profile user={user} handleDeleteAccount={handleDeleteAccount} />} />
      <Route path="/signin" element={<SignIn onSignInComplete={setUser} />} />
      <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
      <Route path="/cart" element={<Cart />} />
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRoutes;
