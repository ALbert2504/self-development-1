import { createContext, useContext, useState } from "react";

const ContinentContext = createContext(null);

export const useContinent = () => useContext(ContinentContext);

export const ContinentProvider = ({ children }) => {
  const [continent, setContinent] = useState(null);

  const value = {continent, setContinent};

  return (
    <ContinentContext.Provider value={value}>
      {children}
    </ContinentContext.Provider>
  );
};
