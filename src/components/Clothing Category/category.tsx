import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { products } from '../../data/clothingMockData';
import { Title, SubTitle, LargeBodyText, MediumBodyText } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import Categories from '../../components/Clothing Category/categories';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../redux/actions/cartSlice'; // Alias

type Product = {
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

const Category = () => {
  let { category = '' } = useParams();
  const title = category.replace(/-/g, ' ');
  category = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const categoryProducts = products.filter((product: Product) => product.category.toLowerCase() === category.toLowerCase());
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCartAction({
      ...product,
      quantity: 1,
    })); // No need to convert price here
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="product-list clothing-category-product-list">
      <Header />
      <div className="title-container">
        <CategoryTitle>{title}</CategoryTitle>
      </div>
      <Categories showInCategoryPage={true} />
      <div className="product-list category-product-list">
        {categoryProducts.map((product: Product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
            <SubTitle>{product.name}</SubTitle>
            <LargeBodyText>{product.description}</LargeBodyText>
            <MediumBodyText>{product.price}</MediumBodyText>
            <button onClick={() => handleAddToCart(product)} className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Category;
