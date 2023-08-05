import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { accessories } from '../../data/accessoriesMockData';
import { Title, SubTitle, LargeBodyText, MediumBodyText } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import AccessoryCategories from './accessoryCategories';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartSlice';

// Define a type for Accessory
type Accessory = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
};

const CategoryTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: lighter;
  text-transform: capitalize;
  margin-top: 80px;
  text-align: center;
`;

const AccessoryCategory = () => {
  let { category = '' } = useParams();
  const dispatch = useDispatch(); // Added

  // Replace hyphens with spaces for the title
  const title = category.replace(/-/g, ' ');

  // Make the first letter of each word uppercase to match the product data
  category = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Filter the products for this category
  const categoryProducts = accessories.filter((product: Accessory) => product.category.toLowerCase() === category.toLowerCase());

  // Function to add product to cart
  const addToCartHandler = (product: Accessory) => { // Updated
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      <Header />
      <div className="title-container">
        <CategoryTitle>{title}</CategoryTitle>
      </div>
      <AccessoryCategories showInCategoryPage={true} />
      <div className="product-list category-product-list">
        {categoryProducts.map((product: Accessory) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
            <SubTitle>{product.name}</SubTitle>
            <LargeBodyText>{product.description}</LargeBodyText>
            <MediumBodyText>{product.price}</MediumBodyText>
            <button onClick={() => addToCartHandler(product)} className="product-button">Add to Cart</button> {/* Updated */}
          </div>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default AccessoryCategory;
