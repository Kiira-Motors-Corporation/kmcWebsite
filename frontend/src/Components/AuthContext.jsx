import  { createContext,useContext, useState, useEffect } from 'react';
import axios from 'axios';


 const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('http://localhost:3000/checkSession', { withCredentials: true });
                if (response.data.loggedIn) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error('Error checking session', error);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);


    const login = async (username, password) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password }, { withCredentials: true });
            if (response.data.loggedIn) {
                setUser(response.data.user);

                return true; // Indicate success
            } else {
                setUser(null);
            }

        } catch (error) {
            console.error('Login error', error);
            setUser(null);

        } finally {
            setLoading(false);
        }
    };

    const signup = async (username, fname, lname, email, country, phone, category, password) => {
        setLoading(true);
        try {
            // Replace with your actual signup API call
            const response = await axios.post('http://localhost:3000/signup', {
                username,
                fname,
                lname,
                email,
                country,
                phone,
                category,
                password
            });
            setUser(response.data.user);
            setLoading(false);
            return true;
        } catch (error) {
            console.error('Signup error', error);
            setLoading(false);
            return false;
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await axios.get('http://localhost:3000/logout', { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error('Logout error', error);
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
