import React, { useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { createUserProfile } from '../../graphql/mutations';
import './signIn.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import {getUserProfile} from "../../graphql/queries";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const createNewUserProfile = async (username: string) => {
    const newProfile = {
      username,
      phone: "",  // Initialize with empty or default values
      profilePic: "",
      firstTimeLogin: true  // Initialize to true here
    };
    const result: any = await API.graphql(graphqlOperation(createUserProfile, { input: newProfile }));
    const newId = result.data.createUserProfile.id;  // Extract the new ID from the result
    localStorage.setItem('currentUserId', newId);  // Store the ID in local storage
  };



  const checkUserProfile = async () => {
    try {
      const userProfileData: any = await API.graphql(graphqlOperation(getUserProfile, { id: username }));
      const firstTimeLogin = userProfileData.data.getUserProfile.firstTimeLogin;

      console.log("First Time Login from Database:", firstTimeLogin); // Debugging line

      if (firstTimeLogin) {
        window.location.href = '/edit-profile';
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      console.log('Error fetching user profile:', error);
    }
  };



  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      localStorage.setItem('currentUser', username);

      // Check if this is the first time the user logs in
      const unconfirmedUsername = localStorage.getItem('unconfirmedUsername');
      if (unconfirmedUsername === username) {
        await createNewUserProfile(username);  // Create new user profile in DynamoDB
        localStorage.removeItem('unconfirmedUsername');  // Remove the username from local storage
        // Redirect new users to the Edit Profile page
        window.location.href = '/edit-profile';
        return;
      }

      // Get the current authenticated user
      const user = await Auth.currentAuthenticatedUser();
      // Get the user's groups from their attributes
      const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"] || [];

      if (userGroups.includes('Admins')) {
        // Redirect to Admin Page if the user is part of the Admins group
        window.location.href = '/admin';
      } else {
        // Redirect to the home page for regular users
        window.location.href = '/';
      }
      checkUserProfile();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Sign In</button>
        </form>
        {error && <div className="signin-error">{error}</div>}
        <div className="signin-links">
          <Link to="/create-account">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default SignIn;
