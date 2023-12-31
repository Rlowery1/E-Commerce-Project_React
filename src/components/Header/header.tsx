import React, { useState, useContext } from "react";
import Menu from "../Common/Icon/menu";
import ShoppingBag from "../Common/Icon/shoppingBag";
import "./header.styles.css";
import logoPng from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { CartItem } from '../../redux/actions/cartSlice';
import { useSelector } from "react-redux";
import ProfileIcon from "../Common/Icon/profileIcon";
import SearchBar from '../Search Bar/searchBar';
import { RootState } from "../../redux/store/store";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const userProfileImage = userProfile.profilePic;

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxRate = 0.10;
  const tax = subtotal * taxRate;
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

  const handleSearchToggle = (isActive: boolean) => {
    setIsSearchActive(isActive);
  };

  return (
    <div className={`header ${isSearchActive ? "search-active" : ""}`}>
      <div className={`header-left ${isSearchActive ? "fade-out" : "fade-in"}`} onClick={toggleMenu}>
        <Menu className="menu-instance" />
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <div className="dropdown-menu-item">
              <a>Collections</a>
              <div className="dropdown-menu-inner">
                <Link to="/fall-collection">Fall</Link>
                <Link to="/spring-collection">Spring</Link>
                <Link to="/summer-collection">Summer</Link>
              </div>
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
      <div className={`header-center ${isSearchActive ? "fade-out" : "fade-in"}`}>
        <img src={logoPng} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <div className="right-container">
          <div className={`profile-container ${isSearchActive ? "fade-out" : "fade-in"}`}>
            <ProfileIcon className={`profile-instance`} profileImage={userProfileImage} />
          </div>
          <SearchBar onSearchToggle={handleSearchToggle} />
          <div className="shopping-bag" onClick={toggleCart}>
            <ShoppingBag className="shopping-bag-icon" />
            {totalItemsInCart > 0 && (
              <span className="cart-item-count">{totalItemsInCart}</span>
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
    </div>
  );
};

export default Header;
