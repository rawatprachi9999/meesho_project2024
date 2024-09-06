import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Navbar from './NavBar';
import '../styles/ProductDetails.css';
import { addToCart } from '../redux/cartSlice'; // Import the Redux action

function ProductDetails({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [mainImage, setMainImage] = useState(product?.image);
  const dispatch = useDispatch(); // Initialize dispatch for Redux

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to Redux
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="product-details-container">
        <div className="product-thumbnails-section">
          {[...Array(2)].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`${product.name} thumbnail ${index}`}
              className="product-thumbnail"
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>
        <div className="product-image-section">
          <img src={mainImage} alt={product.name} className="product-image" />
        </div>
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <div className="product-rating">
            <span>{product.rating} ★</span><br />
            <span> (6055 Ratings, 2587 Reviews)</span>
          </div>

          <p className="product-delivery">Free Delivery</p>
          <div>{product.details}</div>
          <p>{product.sizesAvailable.join(', ')}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(product)} // Call the dispatch function
          >
            Add to Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
