import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import TopCategoriesSection from '../Components/TopCategoriesSection';
import ProductPage from '../Components/ProductPage';
import Footer from '../Components/Footer';


function LandingPage() {
    return (
        <>
            <Header />
            <NavBar />
            <Banner />
            <TopCategoriesSection />
          <ProductPage/>
          <br/>
          <Footer/>
          
        </>
    );
}

export default LandingPage;
