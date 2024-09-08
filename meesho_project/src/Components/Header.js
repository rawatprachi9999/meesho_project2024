import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // If you want to show cart count
import '../styles/Header.css';
import phoneIcon from '../assets/images/phone.png';
import profileIcon from '../assets/images/profile.jpg';
import cartIcon from '../assets/images/cart.png';
import brand from '../assets/images/brand.jpg';
import Profile from './Profile';
import LandingPage from '../pages/LandingPage';

const Header = () => {
  const [user, setUser] = useState(null);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const searchBarRef = useRef(null);
  const navigate = useNavigate();
  
  // To get cart count
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAccountHover = () => {
    setAccountDropdown(true);
  };

  const handleAccountLeave = () => {
    setAccountDropdown(false);
  };

  const handleDownloadHover = () => {
    setDownloadDropdown(true);
  };

  const handleDownloadLeave = () => {
    setDownloadDropdown(false);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      setRecentSearches((prevSearches) => [searchInput, ...prevSearches.slice(0, 4)]);
      setSearchInput('');
    }
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = (e) => {
    if (searchBarRef.current && searchBarRef.current.contains(e.relatedTarget)) {
      return;
    }
    setSearchFocused(false);
  };

  const handleSignUp = (name, phoneNumber) => {
    setUser({ name, phoneNumber });
  };

  const handleDeleteAccount = () => {
    setUser(null);
  };

  // Navigate to Cart Page
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand">
          <Link to="/">
            <img src={brand} alt="brand logo" className="brand-image" />
          </Link>
        </div>

        <div className="search-bar" ref={searchBarRef}>
          <input
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            value={searchInput}
            onChange={handleSearchChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          {(searchFocused || recentSearches.length > 0) && (
            <div className="search-options" tabIndex={-1}>
              <div className="search-option recent-searches">
                <strong>Recent Searches</strong>
                <ul>
                  {recentSearches.length > 0 ? (
                    recentSearches.map((search, index) => (
                      <li key={index}>{search}</li>
                    ))
                  ) : (
                    <li>No recent searches</li>
                  )}
                </ul>
              </div>
              <div className="search-option popular-searches">
                <strong>Popular Searches</strong>
                <ul>
                  <li>Saree</li>
                  <li>Kurti</li>
                  <li>Watch</li>
                  <li>Earring</li>
                  <li>Top for Women</li>
                  <li>Blouse</li>
                  <li>Short Kurti</li>
                  <li>Jeans</li>
                  <li>Shoes</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="account-links">
          <div
            className="download-app"
            onMouseEnter={handleDownloadHover}
            onMouseLeave={handleDownloadLeave}
          >
            <img src={phoneIcon} alt="Download App" className="icon" />
            Download App
            {downloadDropdown && (
              <div className="download-dropdown">
                <p>
                  <a href="https://play.google.com/store/apps/details?id=com.meesho.supply" target='_blank' rel="noopener noreferrer">
                    <img src='https://images.meesho.com/images/pow/playstore-icon-big.png' alt="Google Play Store" />
                  </a>
                </p>
                <p>
                  <a href="https://apps.apple.com/in/app/meesho/id1457958492" target='_blank' rel="noopener noreferrer">
                    <img src='https://images.meesho.com/images/pow/appstore-icon-big.png' alt="Apple App Store" />
                  </a>
                </p>    
              </div>
            )}
          </div>

          <div className="become-supplier">
            <Link to="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header" className="become-supplier" target='_blank' rel="noopener noreferrer">Become a Supplier</Link>
          </div>

          <div className="newsroom">
            <Link to="https://www.meesho.io/news" className="newsroom" target='_blank' rel="noopener noreferrer">Newsroom</Link>
          </div>

          <div
            className="profile"
            onMouseEnter={handleAccountHover}
            onMouseLeave={handleAccountLeave}
          >
            <img src={profileIcon} alt="Profile" className="icon" />
            Profile
            {accountDropdown && (
              <Profile user={user} handleDeleteAccount={handleDeleteAccount} />
            )}
          </div>
        </div>
        <div className="cart">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
