import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link
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
};

const fetchGifts = async (): Promise<Product[]> => {
  try {
    const result: any = await API.graphql({
      query: listProducts,
      authMode: "API_KEY",
    });
    return result.data.listProducts.items;
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

  const newArrivals = products.filter((product) => product.isNewArrival);
  const bestSellers = products.filter((product) => product.isBestSeller);
  const featuredGifts = products.filter((product) => product.isFeaturedGift);

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
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <div className="gift-item">
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button>More Info</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-container">
        <h2>Best Sellers</h2>
        <p>Discover our most popular items</p>
        <div className="gifts-container">
          {bestSellers.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <div className="gift-item">
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button>More Info</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-container">
        <h2>Featured Gifts</h2>
        <p>Check out our handpicked selections</p>
        <div className="gifts-container">
          {featuredGifts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <div className="gift-item">
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button>More Info</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="cta-section">
        <h2>Don't Wait, Find the Perfect Gift Now</h2>
        <Link to="/new-arrivals" style={{ textDecoration: 'none' }}>
          <button>Shop Now</button>
        </Link>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default Gifts;
