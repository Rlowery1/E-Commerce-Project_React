import React, { useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { createUserProfile } from '../../graphql/mutations';
import './signIn.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const createNewUserProfile = async (username: string) => {
    const newProfile = {
      username,
      phone: "",  // Initialize with empty or default values
      profilePic: ""
    };
    await API.graphql(graphqlOperation(createUserProfile, { input: newProfile }));
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
