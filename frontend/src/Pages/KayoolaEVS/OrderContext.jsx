import { createContext, useState, useEffect } from 'react';
import { useAuth } from '../../Components/AuthContext';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { user } = useAuth();


  const [orderCount, setOrderCount] = useState(() => {
    const storedCount = localStorage.getItem('orderCount');
    return storedCount ? JSON.parse(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('orderCount', JSON.stringify(orderCount));
  }, [orderCount]);

  const addOrder = () => {

    setOrderCount(prevCount => prevCount + 1);
  };

  const removeOrder = () => {

    setOrderCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };


  const clearOrders = () => {

    setOrderCount(0);
  };
  return (
    <OrderContext.Provider value={{ orderCount, addOrder, removeOrder,clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export  { OrderContext, OrderProvider };
