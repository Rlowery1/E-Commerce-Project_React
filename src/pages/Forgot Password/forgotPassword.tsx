import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './forgotPassword.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(0); // 0 for request reset, 1 for enter code

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.forgotPassword(username);
      alert("Please check your email for a password reset code.");
      setStep(1); // Move to next step
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(username, verificationCode, newPassword);
      alert("Password changed successfully! You can now log in.");
      window.location.href = '/sign-in'; // Redirect to sign-in page
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        {step === 0 ? (
          <form onSubmit={handleForgotPassword}>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <button type="submit">Reset Password</button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <input type="text" placeholder="Verification Code" onChange={e => setVerificationCode(e.target.value)} />
            <input type="password" placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
            <button type="submit">Change Password</button>
          </form>
        )}
        {error && <div className="forgot-password-error">{error}</div>}
        <div className="forgot-password-links">
          <Link to="/sign-in">Back to Sign In</Link>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default ForgotPassword;
