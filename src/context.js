import React, { useState, useContext } from 'react';
import useFetch from './useFetch.js';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        query,
        setQuery,
        data,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
