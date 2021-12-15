import React, { useState } from "react";
import AuthNetworkRequest from "./AuthNetworkRequ";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth, toggleAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
