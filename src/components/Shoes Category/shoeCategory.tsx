import React, { useEffect, useState } from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
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
import { Auth } from 'aws-amplify';

type Shoe = {
  id: number;
  name: string;
  description: string;
  price: number;
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
  const formattedCategory = category.replace(/-/g, ' ').toLowerCase(); // Replace hyphens and convert to lowercase
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
      let authMode: "API_KEY" | "AMAZON_COGNITO_USER_POOLS" = "API_KEY"; // Default to API_KEY for unauthenticated users

      try {
        await Auth.currentAuthenticatedUser();
        authMode = "AMAZON_COGNITO_USER_POOLS"; // Use Cognito if user is authenticated
      } catch (userError) {
        // User is not authenticated
      }

      let nextToken = null;
      let allProducts: Shoe[] = [];

      do {
        const result: any = await API.graphql({
          query: listProducts,
          variables: { filter: { category: { eq: formattedCategory } }, nextToken },
          authMode, // Apply the chosen authentication mode
        });

        allProducts = allProducts.concat(
          result.data.listProducts.items.map((item: any) => ({
            ...item,
            price: parseFloat(item.price.toString().replace('$', '')),
          }))
        );
        nextToken = result.data.listProducts.nextToken;

      } while (nextToken);

      setCategoryProducts(allProducts);
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
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image"/>
              <SubTitle>{product.name}</SubTitle>
              <LargeBodyText>{product.description}</LargeBodyText>
              <MediumBodyText>{`$${product.price.toFixed(2)}`}</MediumBodyText>
              <button onClick={(e) => {e.preventDefault(); addToCart(product);}} className="product-button">Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default ShoeCategory;
