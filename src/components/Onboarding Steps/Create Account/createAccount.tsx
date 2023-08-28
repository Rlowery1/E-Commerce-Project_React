import React, { FormEvent, useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { createUserProfile } from '../../../graphql/mutations';  // import the createUserProfile mutation
import './createAccount.css';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

interface CreateAccountProps {
  onSuccess: () => void;
}

const ProgressIndicator = () => <div className="progress-indicator">Step 1 of 3</div>;

const CreateAccount: React.FC<CreateAccountProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const createNewUserProfile = async (username: string) => {
    const newProfile = {
      username,
      phone: "",  // Initialize with empty or default values
      profilePic: ""
    };
    await API.graphql(graphqlOperation(createUserProfile, { input: newProfile }));
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { user } = await Auth.signUp({ username, password, attributes: { email } });
      if (user) {
        localStorage.setItem('unconfirmedUsername', username);  // Store the username in local storage
        onSuccess();
        window.location.href = '/password-verification';
      }
    } catch (error) {
      console.log('Error signing up:', error);
      setError((error as any).message || "An error occurred during signup.");
    }
  };


  return (
    <div>
      <Header />
      <div className="create-account-container">
        <ProgressIndicator />
        <h2>Let's Create Your Account</h2>
        <p>Provide the details below to get started.</p>
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />  {/* New Input */}
          <button type="submit">Create Account</button>
        </form>
        {error && <div className="create-account-error">{error}</div>}
        <div className="create-account-links">
          <Link to="/sign-in">Back to Sign In</Link>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default CreateAccount;
