import React, { useState } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid'; 
import products from './products';// Component that displays the list of products


const products = {products}

const MainPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default MainPage;
