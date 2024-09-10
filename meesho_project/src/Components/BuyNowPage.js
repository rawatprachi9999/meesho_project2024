import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/BuyNowPage.css'; // Add appropriate styles
import Header from './Header';
import safty from '../assets/images/safty.webp';
import { addToCart, removeFromCart } from '../redux/cartSlice'; // Using your existing actions

const BuyNow = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleAddItem = (item) => {
    dispatch(addToCart(item)); // Dispatch action to increase the quantity
  };

  const handleReduceItem = (id) => {
    dispatch(removeFromCart(id)); // Dispatch action to reduce the quantity
  };

  return (
    <div className="buy-now-page">
      <Header />
      <div className="buy-now-header">
        <h2>Buy Now</h2>
      </div>

      <div className="buy-now-container">
        {/* Left Section: Product Details */}
        <div className="buy-now-items">
          <h3>Product Details</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="buy-now-item">
                <div className="buy-now-item-details">
                  <img src={item.image} alt={item.name} className="buy-now-item-image" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      ₹{item.price} <span className="discount-text">₹{item.discountPrice}</span>
                    </p>
                    <p>Size: {item.size} • Qty: {item.quantity}</p>

                    {/* Add and Remove Buttons */}
                    <div className="quantity-controls">
                      <button 
                        className="reduce-btn" 
                        onClick={() => handleReduceItem(item.id)}
                      >
                        &#8722; {/* Unicode for minus symbol */}
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="add-btn" 
                        onClick={() => handleAddItem(item)}
                      >
                        &#43; {/* Unicode for plus symbol */}
                      </button>
                    </div>
                  </div>
                </div>
                <p>Sold by: {item.seller}</p>
                <p>Free Delivery</p>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Price Details */}
        <div className="buy-now-summary">
          <h3>Price Details ({totalQuantity} Items)</h3>
          <div className="price-details">
            <p>Total Product Price: <span>₹{totalAmount}</span></p>
            <p>Total Discounts: <span className="discount-text">- ₹71</span></p>
            <p>Order Total: <span>₹{totalAmount - 71}</span></p>
          </div>
          <div className="continue-section">
            <p className="discount-info">Yay! Your total discount is ₹71</p>
           
            <Link to="/checkout">
              <button className="continue-btn">Proceed to Checkout</button>
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

export default BuyNow;