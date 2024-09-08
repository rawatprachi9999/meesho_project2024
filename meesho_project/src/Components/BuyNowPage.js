import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyNowPage.css'; // Add styles for the Buy Now page

const BuyNowPage = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // After completing the order, navigate to the confirmation page
    navigate('/confirmation');
  };

  return (
    <div className="buy-now-container">
      <h1>Order Summary</h1>

      <div className="order-details">
        <h2>Your Items</h2>
        {/* Replace with actual product details from the cart */}
        <p>Item 1: ₹1999</p>
        <p>Item 2: ₹499</p>
        <p>Item 3: ₹1299</p>
        <h3>Total: ₹3797</h3>
      </div>

      <div className="payment-info">
        <h2>Payment Information</h2>
        <p>Credit Card Number: **** **** **** 1234</p>
        <p>Expiration Date: 12/25</p>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default BuyNowPage;
