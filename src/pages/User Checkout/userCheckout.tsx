import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cartSlice';
import { RootState } from '../../redux/store/store';
import { Link } from 'react-router-dom';
import './userCheckout.css';

const UserCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [contactInfo, setContactInfo] = useState({
    email: '',
    phoneNumber: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  const taxRate = 0.10;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      setPaymentError('Payment failed. Please try again.');
      setLoading(false);
    } else {
      // Handle payment success (send to server, etc.)
      setLoading(false);
      setPaymentSuccess(true);
      dispatch(clearCart()); // Clear the cart
    }
  };

  if (paymentSuccess) {
    return (
      <div>
        <Header />
        <div className="user-checkout-container">
          <h2>Thank You for Your Purchase!</h2>
          <p>Your order has been successfully processed.</p>
          <Link to="/" className="continue-shopping-button">Continue Shopping</Link>
        </div>
        <Footer theme="light" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="user-checkout-container">
        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.imageUrl} alt={item.name} />
              <span>{item.name} - {item.price} x {item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Shipping Address */}
        <div className="shipping-section">
          <h2>Shipping Address</h2>
          <input type="text" placeholder="Full Name" onChange={e => setShippingAddress({ ...shippingAddress, fullName: e.target.value })} />
          <input type="text" placeholder="Street Address" onChange={e => setShippingAddress({ ...shippingAddress, streetAddress: e.target.value })} />
          <input type="text" placeholder="City" onChange={e => setShippingAddress({ ...shippingAddress, city: e.target.value })} />
          <input type="text" placeholder="State" onChange={e => setShippingAddress({ ...shippingAddress, state: e.target.value })} />
          <input type="text" placeholder="ZIP Code" onChange={e => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })} />
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <h2>Contact Information</h2>
          <input type="email" placeholder="Email" onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })} />
          <input type="tel" placeholder="Phone Number" onChange={e => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })} />
        </div>

        {/* Payment Information */}
        <form onSubmit={handleSubmit}>
          <div className="payment-section">
            <h2>Payment Information</h2>
            <CardElement />
          </div>

          {/* Review Order */}
          <div className="review-order">
            <h2>Review Order</h2>
            <span>Subtotal: ${subtotal.toFixed(2)}</span>
            <span>Tax: ${tax.toFixed(2)}</span>
            <span>Total: ${total.toFixed(2)}</span>
            <button type="submit" className="place-order-button" disabled={!stripe || loading}>
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>
        {paymentError && <div className="payment-error">{paymentError}</div>}
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default UserCheckout;
