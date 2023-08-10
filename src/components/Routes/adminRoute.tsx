import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import AdminPage from '../../pages/Admin Page/adminPage'; // Update with the correct path to the AdminPage file

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState<null | boolean>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"] || [];
        setIsAdmin(userGroups.includes('Admins'));
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAdmin === null) return null; // Or you can return a loading spinner
  if (isAdmin) return <AdminPage />;
  return <Navigate to="/" />;
};

export default AdminRoute;
