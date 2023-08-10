import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Title, SubTitle, LargeBodyText, MediumBodyText } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import ShoeCategories from './shoeCategories';
import '../../pages/Shoes/shoes.css';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../redux/actions/cartSlice';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

type Shoe = {
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

const ShoeCategory = () => {
  let { category = '' } = useParams();
  const navigate = useNavigate();
  const title = category.replace(/-/g, ' ');
  category = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const [categoryProducts, setCategoryProducts] = useState<Shoe[]>([]);
  const dispatch = useDispatch();

  const addToCart = (product: Shoe) => {
    dispatch(addToCartAction({
      ...product,
      quantity: 1,
    }));
  };

  const fetchShoes = async () => {
    try {
      const result: any = await API.graphql(graphqlOperation(listProducts, { filter: { category: { eq: category } } }));
      setCategoryProducts(result.data.listProducts.items);
    } catch (error) {
      console.error("Error fetching shoes:", error);
    }
  };

  useEffect(() => {
    fetchShoes();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="product-list shoes-category-product-list">
      <Header />
      <div className="title-container">
        <CategoryTitle>{title}</CategoryTitle>
      </div>
      <ShoeCategories showInCategoryPage={true} />
      <div className="product-list category-product-list">
        {categoryProducts.map((product: Shoe) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
            <SubTitle>{product.name}</SubTitle>
            <LargeBodyText>{product.description}</LargeBodyText>
            <MediumBodyText>{product.price}</MediumBodyText>
            <button onClick={() => addToCart(product)} className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default ShoeCategory;
