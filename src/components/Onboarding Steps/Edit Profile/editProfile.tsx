import React, { useState, FormEvent, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import {createUserProfile, updateUserProfile} from '../../../graphql/mutations';
import { getUserProfile } from '../../../graphql/queries';
import './editProfile.css';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

interface EditProfileProps {
  onSuccess: () => void;
}

const ProgressIndicator = () => <div className="progress-indicator">Step 3 of 3</div>;

const EditProfile: React.FC<EditProfileProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');  // Add state to keep track of the user's ID

  useEffect(() => {
    const fetchUserProfile = async () => {
      const username = localStorage.getItem('currentUser');  // Fetch username from local storage
      if (username) {
        setUserId(username);
      } else {
        console.log("Username not found in local storage");
      }
    };

    fetchUserProfile();
  }, []);




  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.log("User ID is null or empty");
      return;
    }

    const profileData = {
      id: userId,
      name: name || "N/A",  // Fallback to a default value
      phone: phone || "N/A",  // Fallback to a default value
    };

    console.log("Profile Data to be sent:", profileData);  // Debug line

    try {
      const userProfileData: any = await API.graphql(graphqlOperation(getUserProfile, { id: userId }));
      const existingProfile = userProfileData.data.getUserProfile;

      if (!existingProfile) {
        console.log(`No existing profile found for this username: ${userId}`);
        await API.graphql(graphqlOperation(createUserProfile, { input: profileData }));
        console.log("New profile created.");
      } else {
        await API.graphql(graphqlOperation(updateUserProfile, { input: profileData }));
        console.log("Profile updated.");
      }

      onSuccess();
      alert("Profile updated successfully!");
    } catch (error) {
      console.log('Error updating profile:', JSON.stringify(error, null, 2));
    }
  };





  return (
    <div>
      <Header />
      <div className="edit-profile-container">
        <ProgressIndicator />
        <h1>Almost There!</h1>
        <p>Provide a little more information to complete your profile.</p>
        <form onSubmit={handleUpdateProfile}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <Footer theme="light"/>
    </div>
  );
};

export default EditProfile;
