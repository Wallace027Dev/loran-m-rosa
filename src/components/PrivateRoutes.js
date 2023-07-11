import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function PrivateRoutes({ children }) {
  const { isAuthenticated, currentUser } = useAuth();
  if (!isAuthenticated && !currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
