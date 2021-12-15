import { AuthContext } from "./AuthContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const [isAuth, setIsAuth, toggleAuth] = useContext(AuthContext);

  return (
    <>
      {isAuth ? <button onClick={() => setIsAuth(false)}>signout</button> : ""}
    </>
  );
};

export default Navbar;
