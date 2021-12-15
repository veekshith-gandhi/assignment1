import React, { useState } from "react";
export const ThemeContext = React.createContext();
const ThemeContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const value = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    light: {
      backgroundColor: "grey",
      color: "black",
    },
  };
  return (
    <ThemeContext.Provider value={[value, isAuth, setIsAuth]}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
