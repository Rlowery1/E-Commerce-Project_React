import React from 'react';
import './settings.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const Settings: React.FC = () => {
  return (
    <div>
      <Header />
    <div className="settings-container">
      <h1>Account Settings</h1>
      <div className="settings-section">
        <h2>Personal Details</h2>
        {/* Form for updating personal details */}
      </div>
      <div className="settings-section">
        <h2>Change Password</h2>
        {/* Form for updating the password */}
      </div>
      <div className="settings-section">
        <h2>Manage Addresses</h2>
        {/* Section to manage shipping and billing addresses */}
      </div>
      <div className="settings-section">
        <h2>Payment Methods</h2>
        {/* Section to manage payment methods */}
      </div>
      <div className="settings-section">
        <h2>Email Notifications</h2>
        {/* Section to customize email notifications */}
      </div>
    </div>
      <Footer theme="light"/>
    </div>
  );
};

export default Settings;
