import React from 'react';
import { Link } from 'react-router-dom';


function ProductGrid({ products, addToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
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
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button> {/* AddToCart functionality */}
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
