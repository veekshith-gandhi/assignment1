import { useState } from "react";
import DisplayTodo from "./Displaytodo";
import style from "./input.module.css";

const InputTodo = ({ handleTodo }) => {
  const [change, setChange] = useState("");
  const handleChange = (e) => {
    setChange(e.target.value);
  };
  const handleButton = () => {
    handleTodo(change);
  };
  return (
    <div>
      <input
        className={style.input}
        placeholder="+ Add To-do"
        type="text"
        onChange={handleChange}
      ></input>
      <button className={style.button} onClick={handleButton}>
        +
      </button>
    </div>
  );
};
export default InputTodo;
