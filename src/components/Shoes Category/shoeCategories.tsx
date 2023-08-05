// src/components/Shoes Category/shoeCategories.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../pages/Shoes/shoes.css';

const categories = [
  {name: 'All Shoes', imageUrl: 'imageUrlForAllShoesCategory'},
  {name: 'Formal Shoes', imageUrl: 'imageUrlForCategory'},
  {name: 'Casual Shoes', imageUrl: 'imageUrlForCategory'},
  {name: 'Sports Shoes', imageUrl: 'imageUrlForCategory'},
  {name: 'Boots', imageUrl: 'imageUrlForCategory'},
  // Add other categories here...
];

const ShoeCategories = ({ showInCategoryPage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`shoes-categories ${showInCategoryPage ? 'shoes-category-page' : ''}`}>
      {categories.map((category, index) => {
        if (!showInCategoryPage && category.name === 'All Shoes') {
          return null;
        }
        const to = category.name === 'All Shoes' ? '/shoes' : `/shoes/${category.name.replace(' ', '-').toLowerCase()}`;
        const isActive = location.pathname === to;
        return (
          <div
            key={index}
            onClick={() => navigate(to)}
            className={`shoes-category-item ${isActive ? "shoes-active-category" : ""}`}
          >
            <img src={category.imageUrl} alt={category.name} className="shoes-category-image" />
            <div className="shoes-category-name">{category.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoeCategories;
