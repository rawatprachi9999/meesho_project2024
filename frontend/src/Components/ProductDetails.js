import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import SellerFooter from './SellerFooter';
import '../styles/ProductDetails.css';
import { addToCart } from '../redux/cartSlice';
import CategoryProductList from './CategoryProductList';

function ProductDetails({ products }) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  // Load product when productId changes
  useEffect(() => {
    const selectedProduct = products.find(p => p.id === parseInt(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.image); // Set main image to default product image
    }
  }, [productId, products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <>
      <Header />
      <div className="product-details-container">
        {/* Thumbnail Section */}
        <div className="product-thumbnails-section">
          {product.thumbnails && product.thumbnails.length > 0 ? (
            product.thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail} // Use thumbnail image
                alt={`${product.name} thumbnail ${index}`}
                className="product-thumbnail"
                onClick={() => setMainImage(thumbnail)} // Set main image on thumbnail click
              />
            ))
          ) : (
            <div>No thumbnails available</div>
          )}
        </div>

        {/* Main Image Section */}
        <div className="product-image-section">
          <img src={mainImage} alt={product.name} className="product-image" />
        </div>

        {/* Product Information Section */}
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <div className="product-rating">
            <span className="rating-badge">{product.rating} ★</span>
            <br />
            <span className="rating-details">(6055 Ratings, 2587 Reviews)</span>
          </div>

          <p className="product-delivery">Free Delivery</p>
          <div>{product.details}</div>
          <p>{product.sizesAvailable.join(', ')}</p>

          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
          <SellerFooter product={product} />
        </div>
       
      </div>

      {/* Related Products and Footer */}
      <CategoryProductList category={product.category} />
      
    </>
  );
}

export default ProductDetails;
