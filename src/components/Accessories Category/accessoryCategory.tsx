import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { Title, SubTitle, LargeBodyText, MediumBodyText } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import AccessoryCategories from './accessoryCategories';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartSlice';
import { Auth } from 'aws-amplify';

const capitalizeFirstLetter = (str: string) => {
  return str.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Define a type for Accessory
type Accessory = {
  id: string;
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

const AccessoryCategory = () => {
  let { category = '' } = useParams();
  category = category.replace(/-/g, ' ').toLowerCase(); // Convert to lowercase
  const [categoryProducts, setCategoryProducts] = useState<Accessory[]>([]);
  const dispatch = useDispatch();

  const displayTitle = capitalizeFirstLetter(category.replace(/-/g, ' ')); // Capitalize the title for display

  // Function to add product to cart
  const addToCartHandler = (product: Accessory) => {
    const productWithNumberIdAndStringPrice = {
      ...product,
      id: Number(product.id)
    };
    dispatch(addToCart({ ...productWithNumberIdAndStringPrice, quantity: 1 }));
  };

  // Function to fetch products from the database
  const fetchProducts = async () => {
    try {
      let authMode: "API_KEY" | "AMAZON_COGNITO_USER_POOLS" = "API_KEY";
      let nextToken = null;
      let allProducts: Accessory[] = [];

      do {
        const result: any = await API.graphql({
          query: listProducts,
          variables: { filter: { category: { eq: category } }, nextToken },
          authMode,
        });

        allProducts = allProducts.concat(result.data.listProducts.items);
        nextToken = result.data.listProducts.nextToken;

      } while (nextToken);

      setCategoryProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [category]);

  return (
    <div>
      <Header />
      <div className="title-container">
        <CategoryTitle>{displayTitle}</CategoryTitle> {/* Display the capitalized title */}
      </div>
      <AccessoryCategories showInCategoryPage={true} />
      <div className="product-list category-product-list">
        {categoryProducts.map((product: Accessory) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
            <SubTitle>{product.name}</SubTitle>
            <LargeBodyText>{product.description}</LargeBodyText>
            <MediumBodyText>{product.price.toFixed(2)}</MediumBodyText>
            <button onClick={() => addToCartHandler(product)} className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default AccessoryCategory;
