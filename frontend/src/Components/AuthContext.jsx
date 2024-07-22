import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backend.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // const response = await axios.get(url + '/checkSession', { withCredentials: true });
        const response = await axios.get(url + "/user/checkSession");
        if (response.data.loggedIn) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Error checking session", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (name, password) => {
    setLoading(true);
    try {
      const response = await axios.post(url + "/user/login", {
        name,
        password,
      });

      if (response.data.loggedIn) {
        setUser(response.data.user);

        return true; // Indicate success
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Login error", error);
      setUser(null);
    } finally {
      setLoading(false);
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

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get(url + "/user/logout", { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
