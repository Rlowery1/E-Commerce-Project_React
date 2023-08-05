import React from 'react';
import { Link } from 'react-router-dom';
import './account.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const Account: React.FC = () => {
  // Placeholder for user information - replace with real data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div>
      <Header />
    <div className="account-container">
      <h1>My Account</h1>
      <div className="profile-info">
        <img src="https://i.imgur.com/GdeiDSM.jpg" alt="Profile" className="profile-image" />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="account-links">
        <Link to="/my-orders">My Orders</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
      <Footer theme="light"/>
    </div>
  );
};

export default Account;
