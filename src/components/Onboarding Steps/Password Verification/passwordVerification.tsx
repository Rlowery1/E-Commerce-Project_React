import React, { useState, FormEvent } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './passwordVerification.css';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

interface PasswordVerificationProps {
  onSuccess: () => void;
}

const ProgressIndicator = () => <div className="progress-indicator">Step 2 of 3</div>;


const PasswordVerification: React.FC<PasswordVerificationProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleVerification = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, verificationCode);
      onSuccess();
      alert("Account verified successfully! You can now log in.");
      window.location.href = '/sign-in';
    } catch (err: any) {
      setError(`Verification failed. ${err.message}`);
    }
  };

  return (
    <div>
      <Header />
      <div className="password-verification-container">
        <ProgressIndicator />
        <h2>One More Step!</h2>
        <p>Enter the verification code sent to your email.</p>
        <form onSubmit={handleVerification}>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="text" placeholder="Verification Code" onChange={e => setVerificationCode(e.target.value)} />
          <button type="submit">Verify</button>
        </form>
        {error && <div className="password-verification-error">{error}</div>}
        <div className="password-verification-links">
          <Link to="/sign-in">Back to Sign In</Link>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default PasswordVerification;
