import React, { useState, useEffect } from 'react';
import './gifts.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

type Product = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeaturedGift?: boolean;
  // Add any other properties you expect
};

const fetchGifts = async (): Promise<Product[]> => {
  try {
    const result: any = await API.graphql({
      query: listProducts,
      authMode: "API_KEY",
    });
    return result.data.listProducts.items; // Adjust according to your API response
  } catch (error) {
    console.error('Error fetching gifts:', error);
    return [];
  }
};

const Gifts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchGifts().then(items => {
      setProducts(items);
    });
  }, []);

  // You can further filter products based on categories
  const newArrivals = products.filter((product) => product.isNewArrival);
  const bestSellers = products.filter((product) => product.isBestSeller);
  const featuredGifts = products.filter((product) => product.isFeaturedGift);
  // Adjust filters according to your backend data

  return (
    <div className="gifts-page">
      <Header />

      <section className="hero-section">
        <h1>Find the Perfect Gift</h1>
        <p>Explore our collection of high-end men's fashion gifts.</p>
      </section>

      <div className="section-container">
        <h2>New Arrivals</h2>
        <p>Check out the latest additions to our collection</p>
        <div className="gifts-container">
          {newArrivals.map((item) => (
            <div className="gift-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button>More Info</button>
            </div>
          ))}
        </div>
      </div>

      <section className="best-sellers-section">
        <h2>Best Sellers</h2>
        <p>Discover our most popular items</p>
        {bestSellers.map((item) => (
          <div className="gift-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>More Info</button>
          </div>
        ))}
      </section>

      <section className="featured-gifts">
        <h2>Featured Gifts</h2>
        <p>Check out our handpicked selections</p>
        {featuredGifts.map((item) => (
          <div className="featured-gift-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      {/* ... rest of your code, you can repeat the pattern above for other sections ... */}

      <section className="cta-section">
        <h2>Don't Wait, Find the Perfect Gift Now</h2>
        <button>Shop Now</button>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default Gifts;
