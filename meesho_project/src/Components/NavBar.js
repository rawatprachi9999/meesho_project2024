import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRef = useRef(null);

  const handleClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          onClick={() => handleClick('WomenEthnic')}
          ref={dropdownRef}
        >
          Women Ethnic
          {activeMenu === 'WomenEthnic' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>All Women Ethnic</h5>
                <p>View All</p>
                <h5>Sarees</h5>
                <p>All Sarees</p>
                <p>Silk Sarees</p>
              </div>
              <div className="dropdown-section">
                <h5>Kurtis</h5>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('WomenWestern')}
          ref={dropdownRef}
        >
          Women Western
          {activeMenu === 'WomenWestern' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Topwear</h5>
                <p>Tops</p>
                <p>Dresses</p>
                <p>Sweaters</p>
                <p>Jumpsuits</p>
              </div>
              <div className="dropdown-section">
                <h5>Bottomwear</h5>
                <p>Jeans</p>
                <p>Jeggings</p>
                <p>Palazzos</p>
                <p>Shorts</p>
                <p>Skirts</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('Men')}
          ref={dropdownRef}
        >
          Men
          {activeMenu === 'Men' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Top Wear</h5>
                <p>All Top Wear</p>
                <p>Tshirts</p>
                <p>Shirts</p>
              </div>
              <div className="dropdown-section">
                <h5>Bottom Wear</h5>
                <p>Track Pants</p>
                <p>Jeans</p>
                <p>Trousers</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('HomeKitchen')}
          ref={dropdownRef}
        >
          Home & Kitchen
          {activeMenu === 'HomeKitchen' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Home Furnishing</h5>
                <p>Bedsheets</p>
                <p>Doormats</p>
                <p>Curtains & Sheers</p>
              </div>
              <div className="dropdown-section">
                <h5>Home Decor</h5>
                <p>All Home Decor</p>
                <p>Stickers</p>
                <p>Clocks</p>
                <p>Showpieces</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('Kids')}
          ref={dropdownRef}
        >
          Kids
          {activeMenu === 'Kids' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Boys & Girls 2+ Years</h5>
                <p>Dresses</p>
                <p>Shoes</p>
              </div>
              <div className="dropdown-section">
                <h5>Toys & Accessories</h5>
                <p>Soft Toys</p>
                <p>Footwear</p>
                <p>Stationery</p>
                <p>Watches</p>
                <p>Bags & Backpacks</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('BeautyHealth')}
          ref={dropdownRef}
        >
          Beauty & Health
          {activeMenu === 'BeautyHealth' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Makeup</h5>
                <p>Face</p>
                <p>Eyes</p>
                <p>Lips</p>
                <p>Nails</p>
              </div>
              <div className="dropdown-section">
                <h5>Wellness</h5>
                <p>Sanitizers</p>
                <p>Oral Care</p>
                <p>Feminine Hygiene</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('JewelleryAccessories')}
          ref={dropdownRef}
        >
          Jewellery & Accessories
          {activeMenu === 'JewelleryAccessories' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Jewellery</h5>
                <p>Jewellery Set</p>
                <p>Earrings</p>
                <p>Mangalsutras</p>
                <p>Studs</p>
              </div>
              <div className="dropdown-section">
                <h5>Accessories</h5>
                <p>Belts</p>
                <p>Watches</p>
                <p>Hair Accessories</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('BagsFootwear')}
          ref={dropdownRef}
        >
          Bags & Footwear
          {activeMenu === 'BagsFootwear' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Women Bags</h5>
                <p>Handbags</p>
                <p>Slingbags</p>
                <p>Totes</p>
              </div>
              <div className="dropdown-section">
                <h5>Men Footwear</h5>
                <p>Sports Shoes</p>
                <p>Casual Shoes</p>
                <p>Formal Shoes</p>
              </div>
            </div>
          )}
        </li>

        <li
          onClick={() => handleClick('Electronics')}
          ref={dropdownRef}
        >
          Electronics
          {activeMenu === 'Electronics' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5>Mobile & Accessories</h5>
                <p>All Mobile & Accessories</p>
                <p>Smartwatches</p>
                <p>Mobile Holders</p>
              </div>
              <div className="dropdown-section">
                <h5>Appliances</h5>
                <p>Grooming</p>
                <p>Home Appliances</p>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
