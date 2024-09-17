import React from 'react';
import '../styles/ProductCard.css';  // Make sure to style this component in the CSS file

function ProductCard({ image, name, price, delivery, rating, reviews, details, sizesAvailable }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price} onwards</p>
      <p className="product-delivery">{delivery}</p>
      <div className="product-rating">
        <span className="rating-badge">{rating}</span> {reviews}
      </div>
      {/* Show details and available sizes */}
      <p className="product-details">{details}</p>
      <p className="product-sizes">{sizesAvailable}</p>
    </div>
  );
}

export default ProductCard;
