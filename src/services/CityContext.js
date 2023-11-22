import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem("selectedCity") ?
  JSON.parse(localStorage.getItem("selectedCity")) : null);

  const setCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <CityContext.Provider value={{ selectedCity, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);