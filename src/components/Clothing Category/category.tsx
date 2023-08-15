import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Title, SubTitle, LargeBodyText, MediumBodyText } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import Categories from '../../components/Clothing Category/categories';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../redux/actions/cartSlice';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

type Product = {
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

const Category = () => {
  let { category = '' } = useParams();
  const title = category.replace(/-/g, ' ');
  category = category.split('-').map(word => word.toLowerCase()).join(' '); // Convert to lowercase
  category = category.replace(/&/g, 'and');// Convert to lowercase
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCartAction({
      ...product,
      quantity: 1,
    }));
  };

  const fetchClothings = async () => {
    try {
      let authMode: "API_KEY" | "AMAZON_COGNITO_USER_POOLS" = "API_KEY";
      let nextToken = null;
      let allProducts: Product[] = [];

      do {
        const result: any = await API.graphql({
          query: listProducts,
          variables: { filter: { category: { eq: category } }, nextToken },
          authMode,
        });

        allProducts = allProducts.concat(
          result.data.listProducts.items.map((item: any) => ({
            ...item,
            price: parseFloat(item.price.replace('$', '')),
          }))
        );
        nextToken = result.data.listProducts.nextToken;

      } while (nextToken);

      setCategoryProducts(allProducts);
    } catch (error) {
      console.error("Error fetching clothings:", error);
    }
  };


  useEffect(() => {
    fetchClothings();
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
            <MediumBodyText>{`$${product.price.toFixed(2)}`}</MediumBodyText>
            <button onClick={() => handleAddToCart(product)} className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Category;
