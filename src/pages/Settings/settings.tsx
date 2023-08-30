import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import './settings.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { getUserProfile } from "../../graphql/queries";
import { updateUserProfile } from "../../graphql/mutations";

const Settings: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
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
        setPhone(profile.phone);
        setAddress(profile.address);
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);


  const handleUpdateAddresses = async () => {
    const updatedProfile = {
      id: "userId",
      address,
    };

    try {
      await API.graphql(graphqlOperation(updateUserProfile, { input: updatedProfile }));
      console.log("Addresses updated.");
    } catch (error) {
      console.log("Error updating addresses:", error);
    }
  };

  const handleUpdateProfile = async () => {
    const updatedProfile = {
      id: "userId",
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
          <h2>Manage Addresses</h2>
          <form onSubmit={e => { e.preventDefault(); handleUpdateAddresses(); }}>
            <input type="text" value={address.street} onChange={e => setAddress({...address, street: e.target.value})} placeholder="Street" />
            <input type="text" value={address.city} onChange={e => setAddress({...address, city: e.target.value})} placeholder="City" />
            <input type="text" value={address.state} onChange={e => setAddress({...address, state: e.target.value})} placeholder="State" />  {/* New */}
            <input type="text" value={address.country} onChange={e => setAddress({...address, country: e.target.value})} placeholder="Country" />  {/* New */}
            <input type="text" value={address.zipCode} onChange={e => setAddress({...address, zipCode: e.target.value})} placeholder="Zip Code" />  {/* New */}
            <button type="submit">Update Addresses</button>
          </form>
        </div>
        <div className="settings-section">
          <h2>Change Password</h2>
          <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="Old Password" />
          <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="New Password" />
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
        {passwordChanged && <p>Password changed successfully!</p>}
      </div>
      <Footer theme="light"/>
    </div>
  );
};

export default Settings;
