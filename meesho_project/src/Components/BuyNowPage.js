import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyNowPage.css'; // Add styles for the Buy Now page

const BuyNowPage = () => {
  const navigate = useNavigate();

  // Access cart data from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handlePlaceOrder = () => {
    if (totalAmount === 0) {
      alert('Total amount is zero. Please add items to your cart.');
    } else {
      // After completing the order, navigate to the confirmation page
      navigate('/confirmation');
    }
  };

  return (
    <div className="buy-now-container">
      <h1>Order Summary</h1>

      <div className="order-details">
        <h2>Your Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.name}: ₹{item.price} <span className="discount-text">₹{item.discountPrice}</span></p>
              <p>Size: {item.size} • Qty: {item.quantity}</p>
            </div>
          ))
        )}
        <h3>Total: ₹{totalAmount}</h3>
      </div>

      <div className="payment-info">
        <h2>Payment Information</h2>
        <p>Credit Card Number: **** **** **** 1234</p>
        <p>Expiration Date: 12/25</p>
      </div>

      <button 
        className="place-order-btn" 
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default BuyNowPage;
