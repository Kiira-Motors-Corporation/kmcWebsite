import React, { createContext, useState, useContext,useEffect } from "react";

// Create a new context instance
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const initialCounter = () => {
    // Retrieve counter from local storage or default to 0
    return parseInt(localStorage.getItem('counter')) || 0;
  };

  const [counter, setCounter] = useState(initialCounter);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Save counter to local storage whenever it changes
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  const incrementCounter = () => {
    if (!hasIncremented) {
      setCounter(counter + 1);
      setHasIncremented(true);
    }
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, incrementCounter, decrementCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to consume the CounterContext
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
