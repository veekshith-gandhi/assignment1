import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const DisplayLayout = () => {
  const [value, isAuth, setIsAuth] = useContext(ThemeContext);
  return (
    <div>
      <h1 style={isAuth ? value.dark : value.light}>welcome </h1>
      <h2 style={isAuth ? value.light : value.dark}>Theme Context</h2>
    </div>
  );
};
export default DisplayLayout;
