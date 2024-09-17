import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import LandingPage from './pages/LandingPage';
import ProductPage from './Components/ProductPage';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import products from './Components/products';
import BuyNowPage from './Components/BuyNowPage';
import Confirmation from './Components/Confirmation';
import ProductListingPage from './Components/ProductListingPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
function AppRoutes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load the user from localStorage on initial load
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

 



  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage products={products} />} />
      <Route path="/product/:productId" element={<ProductDetails products={products} />} />
      <Route path="/profile" element={<Profile user={user}  />} />
      <Route path="/signin" element={<SignIn />} />
       <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buynow" element={<BuyNowPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/products" element={<ProductListingPage products={products} />} />
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRoutes;
