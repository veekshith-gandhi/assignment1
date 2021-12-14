import { useState } from "react";

const AxiosTodo = ({ handleTodo }) => {
  const [text, setText] = useState("");
  const handlaOnchange = (e) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    handleTodo(text);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input placeholder="add something" onChange={handlaOnchange} />
      <button onClick={() => handleAddText()}>Add</button>
    </div>
  );
};
export default AxiosTodo;
