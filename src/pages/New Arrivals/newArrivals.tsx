import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './newArrivals.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartSlice';

type ProductData = {
  id: number,
  title: string,
  price: string,
  image: string,
  hoverImage: string
};

const NewArrivals = () => {
  const dispatch = useDispatch();

  const newArrivalsData: ProductData[] = [
    { id: 1, title: 'Product 1', price: '$100', image: 'image1.jpg', hoverImage: 'hoverImage1.jpg' },
    { id: 2, title: 'Product 2', price: '$200', image: 'image2.jpg', hoverImage: 'hoverImage2.jpg' },
    { id: 3, title: 'Product 3', price: '$150', image: 'image3.jpg', hoverImage: 'hoverImage3.jpg' },
    { id: 4, title: 'Product 4', price: '$180', image: 'image4.jpg', hoverImage: 'hoverImage4.jpg' },
  ];

  const moreToExploreData: ProductData[] = [
    { id: 5, title: 'Product 5', price: '$120', image: 'image5.jpg', hoverImage: 'hoverImage5.jpg' },
    { id: 6, title: 'Product 6', price: '$220', image: 'image6.jpg', hoverImage: 'hoverImage6.jpg' },
    { id: 7, title: 'Product 7', price: '$130', image: 'image7.jpg', hoverImage: 'hoverImage7.jpg' },
    { id: 8, title: 'Product 8', price: '$140', image: 'image8.jpg', hoverImage: 'hoverImage8.jpg' },
  ];

  const featuredDesignersData: ProductData[] = [
    { id: 9, title: 'Product 9', price: '$110', image: 'image9.jpg', hoverImage: 'hoverImage9.jpg' },
    { id: 10, title: 'Product 10', price: '$210', image: 'image10.jpg', hoverImage: 'hoverImage10.jpg' },
    { id: 11, title: 'Product 11', price: '$120', image: 'image11.jpg', hoverImage: 'hoverImage11.jpg' },
    { id: 12, title: 'Product 12', price: '$220', image: 'image12.jpg', hoverImage: 'hoverImage12.jpg' },
  ];

  const renderProductCard = (product: ProductData) => (
    <div key={product.id} className="na-card">
      <img className="na-image" src={product.image} alt={product.title} />
      <img className="na-image-hover" src={product.hoverImage} alt={product.title} />
      <div className="na-info">
        <h2 className="na-title">{product.title}</h2>
        <p className="na-price">{product.price}</p>
        <button onClick={() => dispatch(addToCart({
          id: product.id,
          name: product.title,
          description: '',
          price: product.price,
          imageUrl: product.image,
          category: '',
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
        {newArrivalsData.map(renderProductCard)}
      </div>
      <h2 className="more-to-explore">More to Explore</h2>
      <div className="na-container">
        {moreToExploreData.map(renderProductCard)}
      </div>
      <h2 className="featured-designers">Featured Designers</h2>
      <div className="na-container">
        {featuredDesignersData.map(renderProductCard)}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default NewArrivals;
