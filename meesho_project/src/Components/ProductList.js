// src/components/ProductList.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { categoryId } = useParams();

  // Fetch and display products based on the categoryId here

  return (
    <div>
      <h1>Product List for Category {categoryId}</h1>
      {/* Render the products here */}
    </div>
  );
};

export default ProductList;
