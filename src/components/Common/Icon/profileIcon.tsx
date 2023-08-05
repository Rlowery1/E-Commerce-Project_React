import React, { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import './profileIcon.css';

interface Props {
  className?: string;
}

const ProfileIcon: React.FC<Props> = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState('https://i.imgur.com/GdeiDSM.jpg'); // Default image

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsLoggedIn(true);
      // Assuming the user object has a property with the profile image URL
      if (user.profileImage) {
        setUserProfileImage(user.profileImage);
      }
    } catch {
      setIsLoggedIn(false);
    }
  };

  // Function to toggle the profile dropdown
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const profileImageStyle = {
    backgroundImage: `url('${userProfileImage}')`,
  };

  return (
    <div className="profile-icon" onClick={toggleProfile}>
      <div className="profile-image" style={profileImageStyle}></div>
      {isProfileOpen && (
        <div className="profile-dropdown">
          {isLoggedIn ? (
            <>
              <a href="/account">My Account</a>
              <a href="/my-orders">My Orders</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </>
          ) : (
            <a href="/sign-in">Sign In</a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;

