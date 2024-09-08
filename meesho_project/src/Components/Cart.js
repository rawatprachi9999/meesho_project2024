import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'; // Add appropriate styles
import Header from './Header'
import safty from '../assets/images/safty.webp'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-header">
        <h2>Shopping Cart</h2>
      </div>

      <div className="cart-container">
        {/* Left Section: Product Details */}
        <div className="cart-items">
          <h3>Product Details</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      ₹{item.price} <span className="discount-text">₹{item.discountPrice}</span>
                    </p>
                    <p>Size: {item.size} • Qty: {item.quantity}</p>
                    <button className="remove-btn">REMOVE</button>
                  </div>
                </div>
                <p>Sold by: {item.seller}</p>
                <p>Free Delivery</p>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Price Details */}
        <div className="cart-summary">
          <h3>Price Details ({totalQuantity} Items)</h3>
          <div className="price-details">
            <p>Total Product Price: <span>₹{totalAmount}</span></p>
            <p>Total Discounts: <span className="discount-text">- ₹71</span></p>
            <p>Order Total: <span>₹{totalAmount - 71}</span></p>
          </div>
          <div className="continue-section">
            <p className="discount-info">Yay! Your total discount is ₹71</p>
            {/* Updated Link to go to the Buy Now Page */}
            <Link to="/buynow">
              <button className="continue-btn">Buy Now</button>
            </Link>
          </div>
          <div className="meesho-safe">
            <img src={safty} alt="Meesho Safe" />
            <p>Your Safety, Our Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
