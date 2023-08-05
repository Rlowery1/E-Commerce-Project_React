import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './createAccount.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email }
      });
      alert("Account created successfully! Please verify your email.");
      window.location.href = '/password-verification'; // Redirect to password verification page
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="create-account-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} /> {/* Updated placeholder */}
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
