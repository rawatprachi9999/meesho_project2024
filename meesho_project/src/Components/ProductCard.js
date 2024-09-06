import React from 'react';
import '../styles/ProductCard.css';  // Create a separate CSS file for styling

function ProductCard({ image, name, price, delivery, rating, reviews }) {
  return (
    <div className="product-card">
      <img src={image} alt={name}   className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price} onwards</p>
      <p className="product-delivery">{delivery}</p>
      <div className="product-rating">
        <span className="rating-badge">{rating}</span> {reviews}
      </div>
      <p>{product.details}</p>
      <p>{product.sizesAvailable}</p>
    </div>
  );
}

export default ProductCard;
