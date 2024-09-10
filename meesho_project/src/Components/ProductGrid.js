import React from 'react';
import { Link } from 'react-router-dom';

function ProductGrid({ products, addToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card-container">
          <Link to={`/product/${product.id}`} className="product-link">
            <div className="product-card">
              <img
                src={product.image}
                style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              <p>{product.rating} ★ ({product.reviews} reviews)</p>
            </div>
          </Link>

          {/* Add to Cart button functionality */}
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.preventDefault(); // Prevents navigation when clicking the button
              addToCart(product); // Calls the addToCart function passed as a prop
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
