import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, CartItem } from '../../redux/actions/cartSlice';
import { RootState } from '../../redux/store/store';
import { Link } from 'react-router-dom';
import './cart.css';
import {Auth} from "aws-amplify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  // Calculate Tax (e.g., 10%)
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  const newArrivalsData = [
    'https://i.imgur.com/yxxyyAJ.jpg', 'https://i.imgur.com/sgvplFV.jpg', 'https://i.imgur.com/hrDmZv0.jpg', 'https://i.imgur.com/jNFRfmN.jpg'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.map((item: CartItem) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <input type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)} />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
        <h2>Tax: ${tax.toFixed(2)}</h2>
        <h2>Total Price: ${(subtotal + tax).toFixed(2)}</h2>
        <Link to={isAuthenticated ? "/user-checkout" : "/sign-in"} className="checkout-button">Checkout</Link>
        <p className="guest-checkout">Or <Link to="/guest-checkout">Continue as Guest</Link></p>
      </div>
      <div className="promo-section">
        <h3>Explore Our Latest Collection</h3>
        <p>Check out the new arrivals and find the perfect outfit for any occasion.</p>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={1000}
          stopOnHover
        >
          {newArrivalsData.map((image, index) => (
            <div className="carousel-image-container" key={index}> {/* Add this class */}
              <img src={image} alt={`New Arrival ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <Link to="/new-arrivals" className="promo-button">Discover New Arrivals</Link> {/* Link to New Arrivals page */}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Cart;
