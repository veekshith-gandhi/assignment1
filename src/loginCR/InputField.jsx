import { useState } from "react";

const InputField = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  const initialInput = {
    name: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialInput);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        ></input>
        <br />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        ></input>
        <br />
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={input.password}
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" value="SUBMIT" />
        <br />
      </form>
    </div>
  );
};
export default InputField;
