import React, { useState, FormEvent, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createUserProfile, updateUserProfile } from '../../../graphql/mutations';
import { getUserProfile } from '../../../graphql/queries';
import { useNavigate } from 'react-router-dom';
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
  const [userId, setUserId] = useState('');
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);  // Set initial loading state

  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const userIdFromStorage = localStorage.getItem('currentUserId');
      if (userIdFromStorage) {
        setUserId(userIdFromStorage);  // <-- Set the userId here
        const userProfileData: any = await API.graphql(graphqlOperation(getUserProfile, { id: userIdFromStorage }));
        setFirstTimeLogin(userProfileData.data.getUserProfile.firstTimeLogin);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error fetching user profile:', JSON.stringify(error, null, 2));
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchUserProfile();  // Fetch the user profile each time the component mounts
  }, []);

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (!userId) {
      console.log("User ID is null or empty");
      return;
    }
    const profileData = {
      id: userId,
      name: name || "N/A",
      phone: phone || "N/A",
      firstTimeLogin: false
    };
    try {
      await API.graphql(graphqlOperation(updateUserProfile, { input: profileData }));
      console.log("Profile updated.");
      setFirstTimeLogin(false);  // Explicitly set to false after update
      fetchUserProfile();  // Fetch again to make sure UI is up to date
      onSuccess();
      alert("Profile updated successfully!");
      navigate('/');
    } catch (error) {
      console.log('Error updating profile:', JSON.stringify(error, null, 2));
    }
  };

  return (
    <div>
      <Header />
      <div className="edit-profile-container">
        {(firstTimeLogin || isLoading) && <ProgressIndicator />}
        <h1>{(firstTimeLogin || isLoading) ? "Almost There!" : "Edit Your Profile"}</h1>
        <p>{(firstTimeLogin || isLoading) ? "Provide a little more information to complete your profile." : "Feel free to update your profile information."}</p>
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
