import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backend.js";
import { login, checkSession, logout } from '../Components/api.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



 useEffect(() => {
    const initializeSession = async () => {
      try {
        const sessionData = await checkSession();
        setUser(sessionData.user);
      } catch (error) {
        console.error('Error initializing session:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, []);

  const handleLogin = async (name, password) => {
    try {
      const userData = await login(name, password);
      setUser(userData.user);
      setError(null);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };

  const signup = async (name, email, contact, password) => {
    setLoading(true);
    try {
      // Replace with your actual signup API call
      const response = await axios.post(url + "/user/signup", {
        name,
        email,
        contact,
        password,
      });
      setUser(response.data.user);
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Signup error", error);
      setLoading(false);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login:handleLogin ,logout:handleLogout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
