import React, { createContext, useState } from "react";

 export const darkcontext =createContext();

const Darkprovider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  return (
    <darkcontext.Provider value={{ theme, setTheme }}>
      {children}
    </darkcontext.Provider>
  );
};

export default Darkprovider;
