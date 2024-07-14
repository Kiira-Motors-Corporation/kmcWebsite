import axios from 'axios';

const API_URL = "http://localhost:3000";

export const fetchUserOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/evs_orders/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};

export const fetchUserOrdersCoach = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/coach_orders/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user orders:", error);
      throw error;
    }
  };