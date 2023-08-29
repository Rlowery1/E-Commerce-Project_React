  import React, { useState, useEffect } from 'react';
  import CreateAccount from "../../components/Onboarding Steps/Create Account/createAccount";
  import PasswordVerification from "../../components/Onboarding Steps/Password Verification/passwordVerification";
  import EditProfile from "../../components/Onboarding Steps/Edit Profile/editProfile";
  import './onboarding.css';

  const Onboarding = () => {
    const [step, setStep] = useState(1);

    useEffect(() => {
      // Adding a class for the fade-in animation
      document.querySelector('.onboarding-container')?.classList.add('fade-in');
    }, [step]);

    return (
      <div className="onboarding-container">
        <div className="onboarding-header">
          <h1>Welcome to <span className="brand-name">HighEnd Fashion</span></h1>
          <div className="decorative-line"></div>
        </div>
        {step === 1 && <CreateAccount onSuccess={() => setStep(2)} />}
        {step === 2 && <PasswordVerification onSuccess={() => setStep(3)} />}
        {step === 3 && <EditProfile onSuccess={() => setStep(4)} />}
      </div>
    );
  };

  export default Onboarding;
