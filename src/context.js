import React, { useState, useContext } from 'react';
import useFetch from './useFetch.js';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_ACCESS_KEY}`;
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
