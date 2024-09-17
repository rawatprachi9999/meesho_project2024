import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const ProductListingPage = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  // Extract search term from query params
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || ''; // Default to empty string if no search term

  useEffect(() => {
    // Filter products based on search term
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // Show all products if no search term
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <div className="product-listing">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default ProductListingPage;
