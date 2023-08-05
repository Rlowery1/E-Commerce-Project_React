import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      try {
        await Auth.signOut();
        navigate('/'); // Redirect to home page
      } catch (error) {
        console.error('Error signing out: ', error);
      }
    };

    signOut();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
