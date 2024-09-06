import React from 'react';
import '../styles/TopCategoriesSection.css'
import sale from '../assets/images/sale.jpg'
const TopCategoriesSection = () => {
  return (<>
 
    <div className="top-categories-section">
      <h2 className="section-heading">
        <span className="line"></span>
        Top Categories to choose from
        <span className="line"></span>
      </h2>
    </div>
    <div className="sale-image">
      <img src={sale} alt="Sale Banner" />
      
    </div>
    <br/>
    </>
  );
};

export default TopCategoriesSection;
