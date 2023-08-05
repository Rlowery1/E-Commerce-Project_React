// src/components/Accessories Category/accessoryCategories.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// You can add image URL for each category here.
// Replace 'imageUrlForCategory' with actual image URL.
const categories = [
  {name: 'Watches', imageUrl: 'imageUrlForCategory'},
  {name: 'Sunglasses', imageUrl: 'imageUrlForCategory'},
  {name: 'Belts', imageUrl: 'imageUrlForCategory'},
  {name: 'Hats', imageUrl: 'imageUrlForCategory'},
  // Add other categories here...
];

const AccessoryCategories = ({ showInCategoryPage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`accessories-categories ${showInCategoryPage ? 'category-page' : ''}`}>
      {location.pathname !== '/accessories' && (
        <div onClick={() => navigate('/accessories')} className="category-item">
          <div className="category-name">Accessories</div>
        </div>
      )}
      {categories.map((category, index) => {
        const to = `/accessories/${category.name.replace(' ', '-').toLowerCase()}`;
        const isActive = location.pathname === to;
        return (
          <div
            key={index}
            onClick={() => navigate(to)}
            className={`category-item ${isActive ? "active-category" : ""}`}
          >
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <div className="category-name">{category.name}</div>
          </div>
        );
      })}

    </div>
  );
};

export default AccessoryCategories;
