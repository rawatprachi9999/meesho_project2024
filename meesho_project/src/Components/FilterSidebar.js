import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../styles/FilterSidebar.css';

function FilterSidebar({ filters, setFilters }) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [priceRange, setPriceRange] = useState(filters.priceRange || [0, 1000]);
  const [ratingRange, setRatingRange] = useState(filters.ratingRange || [0, 5]);
  const categories = [
    'Women Ethnic',
    'Women Western',
    'Men Western',
    'Home & Kitchen',
    'Kids',
    'Beauty & Health',
    'Jewelry & Accessories',
  ];

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((cat) => cat !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: updatedCategories });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, search: searchTerm });
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    setFilters({ ...filters, priceRange: newPriceRange });
  };

  const handleRatingChange = (newRatingRange) => {
    setRatingRange(newRatingRange);
    setFilters({ ...filters, ratingRange: newRatingRange });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      <div className="filter-category">
        <h4>Categories</h4>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="filter-search">
        <h4>Search</h4>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="filter-price">
        <h4>Price Range</h4>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={priceRange}
          min={0}
          max={1000}
          step={10}
          onChange={handlePriceChange}
          renderThumb={(props) => <div {...props} />} // Ensure `key` is not included in props
        />
        <div className="price-labels">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="filter-rating">
        <h4>Rating Range</h4>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={ratingRange}
          min={0}
          max={5}
          step={0.5}
          onChange={handleRatingChange}
          renderThumb={(props) => <div {...props} />} // Ensure `key` is not included in props
        />
        <div className="rating-labels">
          <span>{ratingRange[0]}★</span>
          <span>{ratingRange[1]}★</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
