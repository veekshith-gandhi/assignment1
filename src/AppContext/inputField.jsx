import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";

const InputField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth, toggleAuth] = useContext(AuthContext);
  const [token, setToken] = useState("");

  const handleSubmit = async () => {
    try {
      await axios
        .post("https://reqres.in/api/login", { email, password })
        .then((res) => setToken(res.data.token));
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuth) {
    return token;
  }
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          placeholder="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Passw</label>
        <input
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default InputField;
