// StoreCard.js
import React from 'react';
import '../styles/StoreCard.css';

const StoreCard = ({ storeName, categories, imageUrl, onClick }) => {
  return (
    <div className="store-card" onClick={onClick}>
      <h3>{storeName}</h3>
      <img src={imageUrl} alt={storeName} className="store-image" />
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCard;
