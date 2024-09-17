import React from 'react';
import '../styles/SellerFooter.css'; // Create CSS styles in a separate file
import shop_profile from '../assets/images/shop_profile_100.webp';

const SellerFooter = ({ product }) => {
  return (
    <footer className="seller-footer">
      <div className="seller-info">
        <div className="seller-details">
          <img
            src={shop_profile} // Replace with actual logo URL
            alt="Shop Logo"
            className="seller-logo"
          />
          <div className="seller-name-rating">
            <h3 className="seller-name">NAKLANG FAB</h3>
            <div className="seller-rating">
              <span className="rating">{product.rating} ★</span>
              <span className="rating-details">104,472 Ratings</span>
            </div>
          </div>
        </div>
        <div className="seller-followers-products">
          <span className="followers">622 Followers</span>
          <span className="products">394 Products</span>
          <button className="view-shop-btn">View Shop</button>
        </div>
      </div>

      <div className="product-ratings">
        <h4>Product Ratings & Reviews</h4>
        <div className="rating-summary">
          <div className="overall-rating">
            <span className="overall-score"></span>
            <span>59,394 Ratings, 15,106 Reviews</span>
          </div>
          <div className="rating-breakdown">
            <div className="rating-bar">
              <span>Excellent</span>
              <div className="bar excellent"></div>
              <span>26,214</span>
            </div>
            <div className="rating-bar">
              <span>Very Good</span>
              <div className="bar very-good"></div>
              <span>13,013</span>
            </div>
            <div className="rating-bar">
              <span>Good</span>
              <div className="bar good"></div>
              <span>8,660</span>
            </div>
            <div className="rating-bar">
              <span>Average</span>
              <div className="bar average"></div>
              <span>3,825</span>
            </div>
            <div className="rating-bar">
              <span>Poor</span>
              <div className="bar poor"></div>
              <span>7,682</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-comments">
        <h4>Customer Reviews for {product.name}</h4>
        <div className="comment">
          <p><strong>Amit P.</strong>: "The {product.name} is really comfortable and worth the price. Quality is amazing!"</p>
        </div>
        <div className="comment">
          <p><strong>Priya S.</strong>: "Not very satisfied with the {product.name}. The material was a bit different than expected, but overall it’s decent."</p>
        </div>
        <div className="comment">
          <p><strong>Rajesh K.</strong>: "Loved the color and fit of the {product.name}. Delivery was quick as well."</p>
        </div>
      </div>
    </footer>
  );
};

export default SellerFooter;
