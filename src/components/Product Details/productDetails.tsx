import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import { getProduct } from '../../graphql/queries';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './productDetails.css';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  // ... other properties
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await API.graphql({
          query: getProduct,
          variables: { id },
          authMode: 'API_KEY'
        }) as { data: { getProduct: Product } };
        setProduct(result.data.getProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="product-loading">Loading...</div>;
  }

  return (
    <div className="product-page">
      <Header />
      <div className="product-details">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          {/* Add other product details like size selection, add to cart button, etc. */}
        </div>
      </div>
      {/* You can add other sections like related products, reviews, etc. */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
