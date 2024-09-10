import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
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
    navigate(`/products/${category}`, { state: { category: activeMenu } });
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
        <li onClick={() => handleClick('WomenEthnic')} ref={dropdownRef}>
          Women Ethnic
          {activeMenu === 'WomenEthnic' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Sarees')}>Sarees</h5>
                <p onClick={() => handleDropdownItemClick('Silk Sarees')}>Silk Sarees</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Kurtis')}>Kurtis</h5>
                <p onClick={() => handleDropdownItemClick('Anarkali Kurtis')}>Anarkali Kurtis</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('WomenWestern')} ref={dropdownRef}>
          Women Western
          {activeMenu === 'WomenWestern' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Topwear')}>Topwear</h5>
                <p onClick={() => handleDropdownItemClick('Tops')}>Tops</p>
                <p onClick={() => handleDropdownItemClick('Dresses')}>Dresses</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Bottomwear')}>Bottomwear</h5>
                <p onClick={() => handleDropdownItemClick('Jeans')}>Jeans</p>
                <p onClick={() => handleDropdownItemClick('Skirts')}>Skirts</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('Men')} ref={dropdownRef}>
          Men
          {activeMenu === 'Men' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('TopWear')}>Top Wear</h5>
                <p onClick={() => handleDropdownItemClick('Tshirts')}>Tshirts</p>
                <p onClick={() => handleDropdownItemClick('Shirts')}>Shirts</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('BottomWear')}>Bottom Wear</h5>
                <p onClick={() => handleDropdownItemClick('Jeans')}>Jeans</p>
                <p onClick={() => handleDropdownItemClick('Trousers')}>Trousers</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('HomeKitchen')} ref={dropdownRef}>
          Home & Kitchen
          {activeMenu === 'HomeKitchen' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('HomeFurnishing')}>Home Furnishing</h5>
                <p onClick={() => handleDropdownItemClick('Bedsheets')}>Bedsheets</p>
                <p onClick={() => handleDropdownItemClick('Curtains')}>Curtains</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('HomeDecor')}>Home Decor</h5>
                <p onClick={() => handleDropdownItemClick('Stickers')}>Stickers</p>
                <p onClick={() => handleDropdownItemClick('Showpieces')}>Showpieces</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('Kids')} ref={dropdownRef}>
          Kids
          {activeMenu === 'Kids' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('BoysGirls')}>Boys & Girls</h5>
                <p onClick={() => handleDropdownItemClick('Dresses')}>Dresses</p>
                <p onClick={() => handleDropdownItemClick('Shoes')}>Shoes</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Toys')}>Toys & Accessories</h5>
                <p onClick={() => handleDropdownItemClick('SoftToys')}>Soft Toys</p>
                <p onClick={() => handleDropdownItemClick('Watches')}>Watches</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('BeautyHealth')} ref={dropdownRef}>
          Beauty & Health
          {activeMenu === 'BeautyHealth' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Makeup')}>Makeup</h5>
                <p onClick={() => handleDropdownItemClick('Face')}>Face</p>
                <p onClick={() => handleDropdownItemClick('Eyes')}>Eyes</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Wellness')}>Wellness</h5>
                <p onClick={() => handleDropdownItemClick('Sanitizers')}>Sanitizers</p>
                <p onClick={() => handleDropdownItemClick('OralCare')}>Oral Care</p>
              </div>
            </div>
          )}
        </li>

        <li onClick={() => handleClick('JewelleryAccessories')} ref={dropdownRef}>
          Jewellery & Accessories
          {activeMenu === 'JewelleryAccessories' && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('JewellerySet')}>Jewellery</h5>
                <p onClick={() => handleDropdownItemClick('Earrings')}>Earrings</p>
                <p onClick={() => handleDropdownItemClick('Studs')}>Studs</p>
              </div>
              <div className="dropdown-section">
                <h5 onClick={() => handleDropdownItemClick('Accessories')}>Accessories</h5>
                <p onClick={() => handleDropdownItemClick('Belts')}>Belts</p>
                <p onClick={() => handleDropdownItemClick('Watches')}>Watches</p>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
