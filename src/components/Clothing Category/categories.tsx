import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const categories = [
  {name: 'Clothing', imageUrl: 'imageUrlForCategory'},
  {name: 'Activewear', imageUrl: 'imageUrlForCategory'},
  {name: 'Blazers & Suits', imageUrl: 'imageUrlForCategory'},
  {name: 'Coats & Jackets', imageUrl: 'imageUrlForCategory'},
  {name: 'Denim', imageUrl: 'imageUrlForCategory'},
  {name: 'Pants', imageUrl: 'imageUrlForCategory'},
  {name: 'Polos & T-Shirts', imageUrl: 'imageUrlForCategory'},
  {name: 'Shirts', imageUrl: 'imageUrlForCategory'},
  {name: 'Shorts', imageUrl: 'imageUrlForCategory'},
  {name: 'Sweaters & Knitwear', imageUrl: 'imageUrlForCategory'},
  {name: 'Swimwear', imageUrl: 'imageUrlForCategory'},
  {name: 'Underwear & Socks', imageUrl: 'imageUrlForCategory'}
];

const Categories = ({ showInCategoryPage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`clothing-categories ${showInCategoryPage ? 'clothing-category-page' : ''}`}>
      {categories.map((category, index) => {
        if (category.name === 'Clothing' && location.pathname === '/clothing') {
          return null;
        }
        const to = category.name === 'Clothing' ? '/clothing' : `/clothing/${category.name.replace(' ', '-').toLowerCase()}`;
        const isActive = location.pathname === to;
        return (
          <Link to={to} key={index} className={`clothing-category-item ${isActive ? "clothing-active-category" : ""}`}> {/* Added Link here */}
            <img src={category.imageUrl} alt={category.name} className="clothing-category-image" />
            <div className="clothing-category-name">{category.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
