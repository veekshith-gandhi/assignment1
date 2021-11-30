import { useState } from "react";
import style from "./input.module.css";
const DisplayTodo = ({ data, handleCheckedChange, handleDelet, id }) => {
  const handleChange = (e) => {
    handleCheckedChange(e.target.value);
  };
  return (
    <>
      <div className={style.displayBox}>
        <input
          type="checkbox"
          onChange={handleChange}
          onClick={() => handleDelet(id)}
          value={data}
        />
        <label>{data}</label>
      </div>
    </>
  );
};
export default DisplayTodo;
