// StoreBanner.js
import React from 'react';
import StoreCard from './StoreCard';
import '../styles/StoreBanner.css';
import womenstore from '../assets/images/womenStore.webp'
import menstore from '../assets/images/menStore.webp'
import kidsStore from '../assets/images/KidsStore.webp'

const StoreBanner = () => {
  const stores = [
    {
      storeName: "Women's Store",
      categories: ['Clothing', 'Handbag', 'Jewellery', 'Beauty'],
      imageUrl: womenstore,
    },
    {
      storeName: "Men's Store",
      categories: ['Clothing', 'Grooming', 'Belt', 'Watches'],
      imageUrl: menstore,
    },
    {
      storeName: "Kid's Store",
      categories: ['Clothing', 'Accessories', 'Toys', 'Healthcare'],
      imageUrl: kidsStore,
    }
  ];

  const handleStoreClick = (storeName) => {
    // Handle the click event here (e.g., navigate to a product list page)
    alert(`Clicked on ${storeName}`);
  };

  return (
    <div className="store-banner">
      {stores.map((store, index) => (
        <StoreCard
          key={index}
          storeName={store.storeName}
          categories={store.categories}
          imageUrl={store.imageUrl}
          onClick={() => handleStoreClick(store.storeName)}
        />
      ))}
    </div>
  );
};

export default StoreBanner;
