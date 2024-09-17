import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from './ProductGrid'; // Import ProductGrid to render the filtered products
import products from './products'; // Assuming this is the products array
import '../styles/NavBar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleDropdownItemClick = (category) => {
    // Filter products based on the selected category
    const filtered = products.filter(product =>
      
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filtered);
    navigate(`/products/${category}`, { state: { category } });
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
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => handleClick('WomenEthnic')} ref={dropdownRef}>
            Women Ethnic
            {activeMenu === 'WomenEthnic' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Sarees')}>Sarees</h5>

                  <h5 onClick={() => handleDropdownItemClick('Kurtis')}>Kurtis</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('WomenWestern')} ref={dropdownRef}>
            Women Western
            {activeMenu === 'WomenWestern' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Top')}>Topwear</h5>

                  <h5 onClick={() => handleDropdownItemClick('Jeans')}>Bottomwear</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('Men')} ref={dropdownRef}>
            Men
            {activeMenu === 'Men' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Tshirts')}>Top Wear</h5>
                  <h5 onClick={() => handleDropdownItemClick('Shirts')}>Shirts</h5>
                  <h5 onClick={() => handleDropdownItemClick('Jeans')}>Bottom Wear</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('HomeKitchen')} ref={dropdownRef}>
            Home & Kitchen
            {activeMenu === 'HomeKitchen' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Bedsheets')}>Home Furnishing</h5>
                  <h5 onClick={() => handleDropdownItemClick('Wall Clock')}>Home Decor</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('Kids')} ref={dropdownRef}>
            Kids
            {activeMenu === 'Kids' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Girls')}>Boys & Girls</h5>
                  <h5 onClick={() => handleDropdownItemClick('Dress')}>Dresses</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('BeautyHealth')} ref={dropdownRef}>
            Beauty & Health
            {activeMenu === 'BeautyHealth' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Lipstick')}>Makeup</h5>
                  <h5 onClick={() => handleDropdownItemClick('Face')}>Face</h5>
                </div>
              </div>
            )}
          </li>

          <li onClick={() => handleClick('JewelleryAccessories')} ref={dropdownRef}>
            Jewellery & Accessories
            {activeMenu === 'JewelleryAccessories' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h5 onClick={() => handleDropdownItemClick('Earrings')}>Jewellery</h5>
              
                  <h5 onClick={() => handleDropdownItemClick('Anklet')}>Accessories</h5>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Render the Product Grid for displaying filtered products */}
      {filteredProducts.length > 0 && (
        <div className="product-grid-container">
          <ProductGrid products={filteredProducts} />
        </div>
      )}
    </>
  );
};

export default Navbar;
