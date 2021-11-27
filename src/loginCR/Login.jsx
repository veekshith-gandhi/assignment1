import { useState } from "react";
import DisplayContent from "./DisplayContent";
import InputField from "./InputField";

const Login = () => {
  const [todo, setTodo] = useState([]);
  const [showdata, setShowdata] = useState(false);
  const handleChange = ({ name, email, password }) => {
    const payload = {
      id: todo.length + 1,
      name,
      email,
      password,
      status: todo.length % 2 === 0 ? true : false,
    };
    setTodo([...todo, payload]);
  };
  console.log(todo);
  return (
    <div>
      <InputField onSubmit={handleChange} />
      <hr />
      <DisplayContent data={todo.filter((item) => !item.status)} />
      <hr />
      <button onClick={() => setShowdata(!showdata)}>Toggle</button>
      <hr />
      {showdata && <DisplayContent data={todo.filter((item) => item.status)} />}
      <hr />
    </div>
  );
};
export default Login;
