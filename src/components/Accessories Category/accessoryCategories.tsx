import React from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';

const capitalizeFirstLetter = (str: string) => {
  return str.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const categories = [
  {name: 'Watches', imageUrl: 'imageUrlForCategory'},
  {name: 'Sunglasses', imageUrl: 'imageUrlForCategory'},
  {name: 'Belts', imageUrl: 'imageUrlForCategory'},
  {name: 'Hats', imageUrl: 'imageUrlForCategory'},
];

const AccessoryCategories = ({ showInCategoryPage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`accessories-categories ${showInCategoryPage ? 'category-page' : ''}`}>
      {location.pathname !== '/accessories' && (
        <Link to="/accessories" className="category-item" style={{ textDecoration: 'none' }}>
          <div className="category-name">Accessories</div>
        </Link>
      )}
      {categories.map((category, index) => {
        const to = `/accessories/${category.name.replace(' ', '-').toLowerCase()}`;
        const isActive = location.pathname === to;
        return (
          <Link to={to} key={index} className={`category-item ${isActive ? "active-category" : ""}`} style={{ textDecoration: 'none' }}>
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <div className="category-name">{capitalizeFirstLetter(category.name)}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default AccessoryCategories;
