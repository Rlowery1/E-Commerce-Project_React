import React from 'react';
import './gifts.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import mockData from '../../data/giftsMockData';

const Gifts = () => {
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
          {mockData.newArrivals.map((item, index) => (
            <div className="gift-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button>More Info</button>
            </div>
          ))}
        </div>
      </div>

      <section className="new-arrivals-section">
        <h2>New Arrivals</h2>
        <p>Check out the latest additions to our collection</p>
        {mockData.newArrivals.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>More Info</button>
          </div>
        ))}
      </section>

      <section className="best-sellers-section">
        <h2>Best Sellers</h2>
        <p>Discover our most popular items</p>
        {mockData.bestSellers.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>More Info</button>
          </div>
        ))}
      </section>

      <section className="gifts-collection">
        <h2>All Gifts</h2>
        <p>Explore our full collection</p>
        {mockData.giftsCollection.map((item) => (
          <div className="gift-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="filters-section">
        {/* Replace with your own filters */}
        <div className="filter">
          <label>
            <input type="checkbox" name="filter-name" />
            Filter Name
          </label>
        </div>
        {/* Repeat for each filter */}
      </section>

      <section className="featured-gifts">
        <h2>Featured Gifts</h2>
        <p>Check out our handpicked selections</p>
        {mockData.featuredGifts.map((item) => (
          <div className="featured-gift-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <p>See what our customers are saying</p>
        {mockData.testimonials.map((testimonial) => (
          <div className="testimonial">
            <p>"{testimonial.quote}" - {testimonial.customerName}</p>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <h2>Don't Wait, Find the Perfect Gift Now</h2>
        <button>Shop Now</button>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default Gifts;
