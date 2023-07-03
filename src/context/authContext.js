import React, { createContext, useState, useEffect, useContext } from 'react';

import UsersService from '../services/UsersService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function logOut() {
    localStorage.removeItem('token');
    setCurrentUser(null);
  }

  async function signUp(user) {
    await UsersService.createUser(user);
  }

  async function signIn(user) {
    const { token } = await UsersService.loginUser(user);

    localStorage.setItem('token', token);
    setCurrentUser({ token });
  }

  function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setCurrentUser({ token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp: signUp,
        signIn: signIn,
        logOut: logOut,
        isAuthenticated: isAuthenticated,
        currentUser: currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
