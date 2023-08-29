import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import './settings.css';  // The updated CSS
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { getUserProfile } from "../../graphql/queries";
import { updateUserProfile } from "../../graphql/mutations";

const Settings: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({ street: "", city: "", state: "", country: "", zipCode: "" });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfileData: any = await API.graphql(graphqlOperation(getUserProfile, { id: "userId" }));
        const profile = userProfileData.data.getUserProfile;
        setName(profile.name);
        setEmail(profile.email);
        setAddress(profile.address);
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const updatedProfile = {
      id: "userId",
      name,
      email,
      address,
    };

    try {
      await API.graphql(graphqlOperation(updateUserProfile, { input: updatedProfile }));
      console.log("Profile updated.");
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  const handleChangePassword = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      setPasswordChanged(true);
    } catch (error) {
      console.log("Error changing password:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="settings-container">
        <div className="settings-section">
          <h1>Account Settings</h1>
          {passwordChanged && <p>Password changed successfully!</p>}
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="settings-section">
          <h2>Manage Addresses</h2>
          <input type="text" value={address.street} onChange={e => setAddress({ ...address, street: e.target.value })} placeholder="Street" />
          {/* Add similar input fields for city, state, country, and zipCode */}
        </div>
        <div className="settings-section">
          <h2>Payment Methods</h2>
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
        <div className="settings-section">
          <h2>Change Password</h2>
          <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="Old Password" />
          <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="New Password" />
          <button onClick={handleUpdateProfile}>Update Profile</button>
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
      <Footer theme="light"/>
    </div>
  );
};

export default Settings;
