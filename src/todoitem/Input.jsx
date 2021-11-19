import { useState } from "react";

const Input = ({ handleTodoList }) => {
  const [text, setText] = useState("");
  const handleBtnAdd = () => {
    handleTodoList(text);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="add something"
        type="text"
        onChange={handleTextChange}
      ></input>
      <button onClick={handleBtnAdd}>Add</button>
    </div>
  );
};
export default Input;
