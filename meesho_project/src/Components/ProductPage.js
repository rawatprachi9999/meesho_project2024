import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import './ProductPage.css';

import saree from '../assets/images/saree.jpeg'

function ProductPage() {
  const [filters, setFilters] = useState({
    categories: [],
    search: '',
    priceRange: [500, 1500], 
  });
  
  const products = [
    // Women Ethnic (Saree & Kurti)
    { id: 1, name: 'Designer Silk Saree', category: 'Women Ethnic', price: 1299, rating: 4.5, reviews: 250, image: saree},
    { id: 2, name: 'Cotton Printed Kurti', category: 'Women Ethnic', price: 699, rating: 4.3, reviews: 180, image: '/Cotton_Printed_kurti' },
    { id: 3, name: 'Chiffon Saree', category: 'Women Ethnic', price: 999, rating: 4.7, reviews: 310, image: '/path/to/saree2.jpg' },
    { id: 4, name: 'Embroidered Kurti', category: 'Women Ethnic', price: 899, rating: 4.4, reviews: 200, image: '/path/to/kurti2.jpg' },
    { id: 5, name: 'Banarasi Silk Saree', category: 'Women Ethnic', price: 1599, rating: 4.8, reviews: 270, image: '/path/to/saree3.jpg' },
    { id: 6, name: 'Casual Cotton Kurti', category: 'Women Ethnic', price: 499, rating: 4.2, reviews: 150, image: '/path/to/kurti3.jpg' },
    { id: 7, name: 'Georgette Saree', category: 'Women Ethnic', price: 1199, rating: 4.6, reviews: 280, image: '/path/to/saree4.jpg' },
    { id: 8, name: 'Anarkali Kurti', category: 'Women Ethnic', price: 1299, rating: 4.5, reviews: 230, image: '/path/to/kurti4.jpg' },
    { id: 9, name: 'Designer Chanderi Saree', category: 'Women Ethnic', price: 1399, rating: 4.7, reviews: 290, image: '/path/to/saree5.jpg' },
    { id: 10, name: 'Party Wear Kurti', category: 'Women Ethnic', price: 799, rating: 4.4, reviews: 210, image: '/path/to/kurti5.jpg' },
  
    // Women Western (Tops & Bottomwear)
    { id: 11, name: 'Off-Shoulder Top', category: 'Women Western', price: 599, rating: 4.3, reviews: 160, image: '/path/to/top1.jpg' },
    { id: 12, name: 'Denim Jeans', category: 'Women Western', price: 1099, rating: 4.5, reviews: 220, image: '/path/to/bottom1.jpg' },
    { id: 13, name: 'Crop Top', category: 'Women Western', price: 499, rating: 4.4, reviews: 170, image: '/path/to/top2.jpg' },
    { id: 14, name: 'Palazzo Pants', category: 'Women Western', price: 799, rating: 4.6, reviews: 210, image: '/path/to/bottom2.jpg' },
    { id: 15, name: 'Peplum Top', category: 'Women Western', price: 649, rating: 4.2, reviews: 150, image: '/path/to/top3.jpg' },
    { id: 16, name: 'Skinny Jeans', category: 'Women Western', price: 999, rating: 4.7, reviews: 250, image: '/path/to/bottom3.jpg' },
    { id: 17, name: 'Ruffle Top', category: 'Women Western', price: 549, rating: 4.3, reviews: 140, image: '/path/to/top4.jpg' },
    { id: 18, name: 'Leggings', category: 'Women Western', price: 399, rating: 4.5, reviews: 180, image: '/path/to/bottom4.jpg' },
    { id: 19, name: 'V-Neck Top', category: 'Women Western', price: 599, rating: 4.4, reviews: 160, image: '/path/to/top5.jpg' },
    { id: 20, name: 'Joggers', category: 'Women Western', price: 899, rating: 4.6, reviews: 210, image: '/path/to/bottom5.jpg' },
  
    // Men Western (Tops & Bottomwear)
    { id: 21, name: 'Crew Neck T-shirt', category: 'Men Western', price: 499, rating: 4.5, reviews: 180, image: '/path/to/men-top1.jpg' },
    { id: 22, name: 'Slim Fit Jeans', category: 'Men Western', price: 1199, rating: 4.7, reviews: 230, image: '/path/to/men-bottom1.jpg' },
    { id: 23, name: 'Polo Shirt', category: 'Men Western', price: 799, rating: 4.6, reviews: 210, image: '/path/to/men-top2.jpg' },
    { id: 24, name: 'Chinos', category: 'Men Western', price: 1099, rating: 4.5, reviews: 200, image: '/path/to/men-bottom2.jpg' },
    { id: 25, name: 'V-Neck T-shirt', category: 'Men Western', price: 599, rating: 4.3, reviews: 160, image: '/path/to/men-top3.jpg' },
    { id: 26, name: 'Cargo Pants', category: 'Men Western', price: 1299, rating: 4.7, reviews: 240, image: '/path/to/men-bottom3.jpg' },
    { id: 27, name: 'Henley Shirt', category: 'Men Western', price: 899, rating: 4.4, reviews: 190, image: '/path/to/men-top4.jpg' },
    { id: 28, name: 'Shorts', category: 'Men Western', price: 699, rating: 4.2, reviews: 150, image: '/path/to/men-bottom4.jpg' },
    { id: 29, name: 'Striped T-shirt', category: 'Men Western', price: 549, rating: 4.5, reviews: 170, image: '/path/to/men-top5.jpg' },
    { id: 30, name: 'Track Pants', category: 'Men Western', price: 799, rating: 4.4, reviews: 180, image: '/path/to/men-bottom5.jpg' },
  
    // Home & Kitchen (Home Furnishing & Home Decor)
    { id: 31, name: 'Cotton Bedsheet', category: 'Home & Kitchen', price: 999, rating: 4.6, reviews: 220, image: '/path/to/furnishing1.jpg' },
    { id: 32, name: 'Wall Art', category: 'Home & Kitchen', price: 1499, rating: 4.7, reviews: 200, image: '/path/to/decor1.jpg' },
    { id: 33, name: 'Cushion Cover Set', category: 'Home & Kitchen', price: 599, rating: 4.5, reviews: 160, image: '/path/to/furnishing2.jpg' },
    { id: 34, name: 'Table Lamp', category: 'Home & Kitchen', price: 899, rating: 4.4, reviews: 170, image: '/path/to/decor2.jpg' },
    { id: 35, name: 'Curtains', category: 'Home & Kitchen', price: 1299, rating: 4.6, reviews: 230, image: '/path/to/furnishing3.jpg' },
    { id: 36, name: 'Vase Set', category: 'Home & Kitchen', price: 799, rating: 4.3, reviews: 150, image: '/path/to/decor3.jpg' },
    { id: 37, name: 'Rug', category: 'Home & Kitchen', price: 1199, rating: 4.7, reviews: 250, image: '/path/to/furnishing4.jpg' },
    { id: 38, name: 'Wall Clock', category: 'Home & Kitchen', price: 999, rating: 4.5, reviews: 210, image: '/path/to/decor4.jpg' },
    { id: 39, name: 'Pillow Set', category: 'Home & Kitchen', price: 499, rating: 4.2, reviews: 140, image: '/path/to/furnishing5.jpg' },
    { id: 40, name: 'Photo Frame Set', category: 'Home & Kitchen', price: 1199, rating: 4.6, reviews: 190, image: '/path/to/decor5.jpg' },
  
    // Kids (Boys & Girls 2+ Years, Infant 0-2 Years)
    { id: 41, name: 'Baby Romper', category: 'Kids', price: 399, rating: 4.5, reviews: 160, image: '/path/to/kids1.jpg' },
    { id: 42, name: 'Toddler Dress', category: 'Kids', price: 699, rating: 4.6, reviews: 170, image: '/path/to/kids2.jpg' },
    { id: 43, name: 'Boys T-shirt', category: 'Kids', price: 349, rating: 4.4, reviews: 150, image: '/path/to/kids3.jpg' },
    { id: 44, name: 'Girls Skirt', category: 'Kids', price: 499, rating: 4.3, reviews: 140, image: '/path/to/kids4.jpg' },
    { id: 45, name: 'Infant Onesie', category: 'Kids', price: 299, rating: 4.2, reviews: 130, image: '/path/to/kids5.jpg' },
    { id: 46, name: 'Kids Shorts', category: 'Kids', price: 399, rating: 4.5, reviews: 160, image: '/path/to/kids6.jpg' },
    { id: 47, name: 'Boys Pajamas', category: 'Kids', price: 449, rating: 4.6, reviews: 170, image: '/path/to/kids7.jpg' },
    { id: 48, name: 'Girls Top', category: 'Kids', price: 349, rating: 4.4, reviews: 150, image: '/path/to/kids8.jpg' },
    { id: 49, name: 'Baby Blanket', category: 'Kids', price: 599, rating: 4.7, reviews: 180, image: '/path/to/kids9.jpg' },
    { id: 50, name: 'Kids Hoodie', category: 'Kids', price: 699, rating: 4.6, reviews: 190, image: '/path/to/kids10.jpg' },

    // Beauty & Health
  { id: 51, name: 'Lipstick', category: 'Beauty & Health', price: 199, rating: 4.7, reviews: 250, image: '/path/to/beauty1.jpg' },
  { id: 52, name: 'Foundation', category: 'Beauty & Health', price: 499, rating: 4.6, reviews: 230, image: '/path/to/beauty2.jpg' },
  { id: 53, name: 'Eyeliner', category: 'Beauty & Health', price: 149, rating: 4.5, reviews: 210, image: '/path/to/beauty3.jpg' },
  { id: 54, name: 'Face Cream', category: 'Beauty & Health', price: 299, rating: 4.4, reviews: 200, image: '/path/to/beauty4.jpg' },
  { id: 55, name: 'Shampoo', category: 'Beauty & Health', price: 349, rating: 4.3, reviews: 190, image: '/path/to/beauty5.jpg' },
  { id: 56, name: 'Conditioner', category: 'Beauty & Health', price: 299, rating: 4.5, reviews: 180, image: '/path/to/beauty6.jpg' },
  { id: 57, name: 'Face Wash', category: 'Beauty & Health', price: 199, rating: 4.6, reviews: 170, image: '/path/to/beauty7.jpg' },
  { id: 58, name: 'Moisturizer', category: 'Beauty & Health', price: 249, rating: 4.4, reviews: 160, image: '/path/to/beauty8.jpg' },
  { id: 59, name: 'Hair Oil', category: 'Beauty & Health', price: 199, rating: 4.7, reviews: 150, image: '/path/to/beauty9.jpg' },
  { id: 60, name: 'Body Lotion', category: 'Beauty & Health', price: 299, rating: 4.6, reviews: 140, image: '/path/to/beauty10.jpg' },

  // Jewelry & Accessories
  { id: 61, name: 'Gold Necklace', category: 'Jewelry & Accessories', price: 1499, rating: 4.8, reviews: 280, image: '/path/to/jewel1.jpg' },
  { id: 62, name: 'Silver Earrings', category: 'Jewelry & Accessories', price: 799, rating: 4.7, reviews: 260, image: '/path/to/jewel2.jpg' },
  { id: 63, name: 'Bracelet', category: 'Jewelry & Accessories', price: 599, rating: 4.6, reviews: 240, image: '/path/to/jewel3.jpg' },
  { id: 64, name: 'Ring', category: 'Jewelry & Accessories', price: 399, rating: 4.5, reviews: 220, image: '/path/to/jewel4.jpg' },
  { id: 65, name: 'Bangle Set', category: 'Jewelry & Accessories', price: 999, rating: 4.4, reviews: 200, image: '/path/to/jewel5.jpg' },
  { id: 66, name: 'Pendant', category: 'Jewelry & Accessories', price: 499, rating: 4.6, reviews: 190, image: '/path/to/jewel6.jpg' },
  { id: 67, name: 'Anklet', category: 'Jewelry & Accessories', price: 299, rating: 4.5, reviews: 180, image: '/path/to/jewel7.jpg' },
  { id: 68, name: 'Hair Clip', category: 'Jewelry & Accessories', price: 149, rating: 4.4, reviews: 170, image: '/path/to/jewel8.jpg' },
  { id: 69, name: 'Brooch', category: 'Jewelry & Accessories', price: 249, rating: 4.3, reviews: 160, image: '/path/to/jewel9.jpg' },
  { id: 70, name: 'Scarf', category: 'Jewelry & Accessories', price: 199, rating: 4.7, reviews: 150, image: '/path/to/jewel10.jpg' },
  ];
  

  const applyFilters = () => {
    let filteredProducts = products;

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

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      filteredProducts = filteredProducts.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
      );
    }

    if (filters.ratingRange) {
      const [minRating, maxRating] = filters.ratingRange;
      filteredProducts = filteredProducts.filter(product =>
        product.rating >= minRating && product.rating <= maxRating
      );
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div className="product-page">
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
      />
      <ProductGrid
        products={filteredProducts}
      />
    </div>
  );
}

export default ProductPage;