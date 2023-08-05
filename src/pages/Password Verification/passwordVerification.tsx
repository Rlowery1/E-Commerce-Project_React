import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './passwordVerification.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const PasswordVerification = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(false);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await Auth.confirmSignUp(username, verificationCode); // Confirm the signup
      alert("Account verified successfully! You can now log in.");
      window.location.href = '/sign-in'; // Redirect to sign-in page
    } catch (err: any) {
      setError("Verification failed. Please check your username and verification code.");
    }
  };

  const handleResendCode = async () => {
    // Disable the resend button for 30 seconds
    setResendCooldown(true);
    setTimeout(() => setResendCooldown(false), 30000);

    try {
      await Auth.resendSignUp(username); // Resend the verification code
      alert("Verification code resent successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="password-verification-container">
        <h2>Email Verification</h2>
        <form onSubmit={handleVerification}>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="text" placeholder="Verification Code" onChange={e => setVerificationCode(e.target.value)} />
          <button type="submit">Verify</button>
        </form>
        <button disabled={resendCooldown} onClick={handleResendCode} className="resend-code-button">Resend Code</button>
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
