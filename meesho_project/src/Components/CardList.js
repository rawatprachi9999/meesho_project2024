import React from 'react';
import Card from './Card';
import handbag from '../assets/images/handbag.jpeg'

const categories = [
  { id: 1, title: 'Category 1', image: handbag, link: '/products/category1' },
  { id: 2, title: 'Category 2', image: 'path-to-image2.jpeg', link: '/products/category2' },
  // Add more categories as needed
];

const CardList = () => {
  return (
    <div className="container">
      {categories.map(category => (
        <Card
          key={category.id}
          title={category.title}
          image={category.image}
          link={category.link}
        />
      ))}
    </div>
  );
};

export default CardList;
