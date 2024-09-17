import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Profile = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  

  if (!user) {
    return <p>No user logged in.</p>;
  }

  return (
    <>
      <Header /><br />
      <div className="profile-container">
        <h1>{user.username}'s Profile</h1>
        <h2>Email: {user.email}</h2>

        <div className="cart-section">
          <h3>Your Cart:</h3>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="orders-section">
          <h3>Your Orders:</h3>
          {user.orders.length > 0 ? (
            <ul>
              {user.orders.map((order, index) => (
                <li key={index}>{order.name}</li>
              ))}
            </ul>
          ) : (
            <p>No orders placed yet.</p>
          )}
        </div>
        
        {/* Links to Cart, Buy Now, and Product pages */}
        <div className="navigation-links">
          <button className='profile-button' onClick={() => navigate('/cart')}>
            Go to Cart ({totalQuantity} items)
          </button><br/>
          <button className='profile-button' onClick={() => navigate('/buynow')}>
            Buy Now
          </button><br/>
          <button className='profile-button' onClick={() => navigate('/products')}>
            Go to Product Page
          </button><br/>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
