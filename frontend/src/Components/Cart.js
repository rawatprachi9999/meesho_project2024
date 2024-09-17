import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Cart.css'; 
import Header from './Header';
import safty from '../assets/images/safty.webp'; 
import { clearCart, addToCart, reduceQuantity } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const discount = totalAmount > 500 ? 71 : 0;
  const discountedAmount = totalAmount - discount;

  const handleAddItem = (item) => {
    dispatch(addToCart(item)); 
  };

  const handleReduceItem = (id) => {
    dispatch(reduceQuantity(id)); 
  };

  const handleBuyNow = () => {
    if (totalAmount === 0) {
      alert('Add something to proceed.');
    } else {
      navigate('/buynow', { state: { totalAmount: discountedAmount, cartItems } }); // Navigate to Buy Now page
      dispatch(clearCart());
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const updatedUser = {
        ...storedUser,
        orders: [...(storedUser.orders || []), ...cartItems],
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

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
                  <Link to={`/product/${item.id}`}> {/* Link to product details page */}
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Link>
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
        <div className="cart-summary">
          <h3>Price Details ({totalQuantity} Items)</h3>
          <div className="price-details">
            <p>Total Product Price: <span>₹{totalAmount}</span></p>
            {discount > 0 && (
              <p>Total Discounts: <span className="discount-text">- ₹{discount}</span></p>
            )}
            <p>Order Total: <span>₹{discountedAmount}</span></p>
          </div>
          <div className="continue-section">
            {discount > 0 && (
              <p className="discount-info">Yay! Your total discount is ₹{discount}</p>
            )}
            <button 
              className="continue-btn" 
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
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
