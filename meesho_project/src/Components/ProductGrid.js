import React from 'react';
import './ProductGrid.css'; // Make sure to import the CSS file

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <p>{product.rating} ★ ({product.reviews} reviews)</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
