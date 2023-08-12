import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './newArrivals.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartSlice';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

type ProductData = {
  id: string,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  category: string,
  createdAt: string,
  hoverImage?: string
};

const fetchProducts = async (limit: number) => { // Add limit parameter here
  try {
    const result: any = await API.graphql({
      query: listProducts,
      variables: {
        limit, // Use the limit provided
      },
      authMode: "API_KEY",
    });

    return result.data.listProducts.items as ProductData[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};



const NewArrivals = () => {
  const dispatch = useDispatch();
  const [latestArrivals, setLatestArrivals] = useState<ProductData[]>([]);
  const [moreToExplore, setMoreToExplore] = useState<ProductData[]>([]);
  const [featuredDesigners, setFeaturedDesigners] = useState<ProductData[]>([]);

  useEffect(() => {
    // Fetch the latest 4 arrivals
    fetchProducts(6).then((products) => {
      setLatestArrivals(products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    });
    // Fetch 4 random products for more to explore
    fetchProducts(6).then((products) => {
      setMoreToExplore(products.sort(() => Math.random() - 0.5));
    });
    // Fetch 4 random products for featured designers
    fetchProducts(6).then((products) => {
      setFeaturedDesigners(products.sort(() => Math.random() - 0.5));
    });
  }, []);


  const renderProductCard = (product: ProductData) => (
    <div key={product.id} className="na-card">
      <img className="na-image" src={product.imageUrl} alt={product.name} />
      <img className="na-image-hover" src={product.hoverImage} alt={product.name} />
      <div className="na-info">
        <h2 className="na-title">{product.name}</h2>
        <p className="na-price">{`$${product.price}`}</p>
        <button onClick={() => dispatch(addToCart({
          id: Number(product.id), // Convert to number if needed
          name: product.name,
          description: product.description,
          price: product.price.toString(), // Convert to string if needed
          imageUrl: product.imageUrl,
          category: product.category,
          quantity: 1
        }))} className="na-btn">Add to Cart</button>
        <a className="na-btn" href={`/${product.id}`}>View Details</a>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <h2 className="latest-arrivals">Latest Arrivals</h2>
      <div className="na-container">
        {latestArrivals.map(renderProductCard)}
      </div>
      <h2 className="more-to-explore">More to Explore</h2>
      <div className="na-container">
        {moreToExplore.map(renderProductCard)}
      </div>
      <h2 className="featured-designers">Featured Designers</h2>
      <div className="na-container">
        {featuredDesigners.map(renderProductCard)}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default NewArrivals;
