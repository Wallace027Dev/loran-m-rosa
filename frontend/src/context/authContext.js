import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function logOut() {
    return signOut(auth);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password, token) {
    localStorage.setItem('token', token);
    setCurrentUser({ token });
    return signInWithEmailAndPassword(auth, email, password);
  }

  function resetPassword(newEmail) {
    return sendPasswordResetEmail(auth, newEmail);
  }

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setCurrentUser({ token });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        resetPassword,
        signUp,
        signIn,
        logOut,
        currentUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
