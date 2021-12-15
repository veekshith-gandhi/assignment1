import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
const ThemeFunction = () => {
  const [value, isAuth, setIsAuth] = useContext(ThemeContext);
  const handleToggle = () => {
    setIsAuth(!isAuth);
  };

  return <button onClick={handleToggle}>Toggle</button>;
};
export default ThemeFunction;
