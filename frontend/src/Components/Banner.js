import React from 'react';
import '../styles/Banner.css';
import free_delivery from '../assets/images/free_delivery.png'
import cash_on_delivery from '../assets/images/cash_on_delivery.png'
import easy_returns from '../assets/images/easy_returns.png'
import playstore from '../assets/images/playstore.png'
import sale_banner from '../assets/images/sale_banner.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h2>Lowest Prices</h2>
                <h2>Best Quality Shopping</h2>
                <div className="features">
                    <div className="feature-item">
                        <img src={free_delivery} alt="Free Delivery" />
                        <p>Free Delivery</p>
                    </div>
                    <div className="feature-item">
                        <img src={cash_on_delivery} alt="Cash on Delivery" />
                        <p>Cash on Delivery</p>
                    </div>
                    <div className="feature-item">
                        <img src={easy_returns} alt="Easy Returns" />
                        <p>Easy Returns</p>
                    </div>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=191b1f860b4188-07b89eabb15e22-26001151-e1000-191b1f860b54e4" target="_blank" rel="noopener noreferrer" className="download-app-btn">
    <img src={playstore} alt="Google Play Icon" />
    Download the Meesho App
</a>


            </div>
            <div className="banner-right">
                <img src={sale_banner} alt="Promo" className="promo-image" />
            </div>
        </div>
        
    );
};

export default Banner;
