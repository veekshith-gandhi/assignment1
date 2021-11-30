import { useState } from "react";
import InputTodo from "./Inputtodo";
import style from "./input.module.css";
import DisplayTodo from "./Displaytodo";
import ShowButton from "./Showbutton";
import CompletedTodo from "./Showcompletedtodo";

const AppTodo = () => {
  const [toggebtn, setTogglebtn] = useState(false);
  const [todo, setTodo] = useState([]);
  const handleTodo = (text) => {
    setTodo([...todo, text]);
  };
  const [checked, setChecked] = useState([]);
  const handleCheckedChange = (value) => {
    setChecked([...checked, value]);
  };
  const handleDelet = (id) => {
    setTodo(todo.filter((item) => item !== id));
  };
  const Toggle = () => {
    // console.log(toggebtn);
    setTogglebtn(!toggebtn);
  };

  return (
    <div className={style.outerContainer}>
      <InputTodo handleTodo={handleTodo} />
      {todo.map((item) => (
        <DisplayTodo
          data={item}
          key={item}
          id={item}
          handleCheckedChange={handleCheckedChange}
          handleDelet={handleDelet}
        />
      ))}

      <ShowButton title={"show completed todo"} Toggle={Toggle} />

      <div style={{ clear: "both" }}>
        {toggebtn
          ? checked.map((item) => <CompletedTodo key={item} title={item} />)
          : false}
      </div>
    </div>
  );
};
export default AppTodo;
