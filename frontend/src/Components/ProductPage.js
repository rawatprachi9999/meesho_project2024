import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import products from '../Components/products'; // Adjust the path as needed
import '../styles/ProductPage.css';
import { addToCart } from '../redux/cartSlice';
import Header from './Header';

function ProductPage() {
  const [filters, setFilters] = useState({
    categories: [],
    search: '',
    priceRange: [500, 1500],
    ratingRange: [0, 5],
  });

  const dispatch = useDispatch();

  const applyFilters = () => {
    let filteredProducts = products || []; // Ensure products is an array

    // Filter by categories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // Filter by search term
    if (filters.search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      filteredProducts = filteredProducts.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Filter by rating range
    if (filters.ratingRange) {
      const [minRating, maxRating] = filters.ratingRange;
      filteredProducts = filteredProducts.filter(product =>
        product.rating >= minRating && product.rating <= maxRating
      );
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (<>
    <Header/>
    <div className="product-page">
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
      />
      <ProductGrid
        products={filteredProducts}
        addToCart={handleAddToCart} // Pass the handler to ProductGrid
      />
    </div>
    </>
  );
}

export default ProductPage;
