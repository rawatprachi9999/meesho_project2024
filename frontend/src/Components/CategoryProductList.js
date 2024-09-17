import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import products from '../Components/products'; // Adjust the path as needed
import '../styles/CategoryProductList.css';

function CategoryProductList({ category }) {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="category-product-list">
      <h3>Related Products in {category}</h3>
      <div className="related-product-grid">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`} // Navigate to ProductPage with product ID
            className="related-product-card-link" // Optional: for additional styling
          >
            <div className="related-product-card">
              <img
                src={product.image}
                alt={product.name}
                className="related-product-image"
              />
              <h4>{product.name}</h4>
              <p>Price: ₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
