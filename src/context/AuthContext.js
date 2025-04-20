import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component that wraps the app and makes auth object available to any child component that calls useAuth()
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // For demo purposes, we'll use a simple check
    // In a real app, you would validate against a backend
    if (email === 'user@example.com' && password === 'password') {
      const user = {
        id: '1',
        name: 'Demo User',
        email: email,
        role: 'user'
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    }
    
    return Promise.reject(new Error('Invalid email or password'));
  };

  // Signup function
  const signup = (name, email, password) => {
    // For demo purposes, we'll just create a user object
    // In a real app, you would send this to your backend
    const user = {
      id: Date.now().toString(),
      name: name,
      email: email,
      role: 'user'
    };
    
    // Store user in localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
    return Promise.resolve(user);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    return Promise.resolve();
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!currentUser;
  };

  // Value object that will be passed to consumers
  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAuthenticated,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
