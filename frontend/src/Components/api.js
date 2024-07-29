import axios from 'axios';
import { url } from "../utils/backend.js";

const api = axios.create({
  baseURL: url, // Your backend URL
  withCredentials: true, // Include credentials (cookies)
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const checkSession = async () => {
  try {
    const response = await api.get('/user/checkSession');
    return response.data;
  } catch (error) {
    console.error('Error checking session:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/user/logout');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
