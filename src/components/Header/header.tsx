import React, { useState, useContext } from "react";
import Menu from "../Common/Icon/menu";
import Search from "../Common/Icon/search";
import ShoppingBag from "../Common/Icon/shoppingBag";
import "./header.styles.css";
import logoPng from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { CartItem } from '../../redux/actions/cartSlice';
import {RootState} from "../../redux/store/store";
import {useSelector} from "react-redux";
import ProfileIcon from "../Common/Icon/profileIcon";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the Subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  // Calculate the Tax (e.g., 10%)
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  // Calculate the Total
  const total = subtotal + tax;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="header">
      <div className="header-left" onClick={toggleMenu}>
        <Menu className="menu-instance" />
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <div className="dropdown-menu-item" onMouseEnter={toggleCollection} onMouseLeave={toggleCollection}>
              <a>Collections</a>
              {isCollectionOpen && (
                <div className="dropdown-menu-inner">
                  <Link to="/fall-collection">Fall</Link>
                  <Link to="/spring-collection">Spring</Link>
                  <Link to="/summer-collection">Summer</Link>
                </div>
              )}
            </div>
            <Link to="/designers">Designers</Link>
            <Link to="/clothing">Clothing</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/shoes">Shoes</Link>
            <Link to="/sale">Sale</Link>
            <Link to="/gifts">Gifts</Link>
          </div>
        )}
      </div>
      <div className="header-center">
        <img src={logoPng} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <ProfileIcon className="profile-instance" />
        <Search className="search-instance" />
        <div className="shopping-bag" onClick={toggleCart}>
          <ShoppingBag className="shopping-bag-icon" />
          {cartItems.length > 0 && (
            <span className="cart-item-count">{cartItems.length}</span>
          )}
          {isCartOpen && (
            <div className="cart-popout">
              {cartItems.map((item: CartItem) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="cart-item-name">{item.name}</div>
                  <div>{item.price}</div>
                </div>
              ))}
              <div className="cart-summary">
                <div className="cart-summary-title">Subtotal:</div>
                <div className="cart-summary-value">${subtotal.toFixed(2)}</div>
              </div>
              <div className="cart-summary">
                <div className="cart-summary-title">Tax:</div>
                <div className="cart-summary-value">${tax.toFixed(2)}</div>
              </div>
              <div className="cart-summary">
                <div className="cart-summary-title">Total:</div>
                <div className="cart-summary-value">${total.toFixed(2)}</div>
              </div>
              <Link to="/cart" className="view-cart">View Cart</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
