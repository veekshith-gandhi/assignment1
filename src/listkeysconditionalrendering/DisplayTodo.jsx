import { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";

const DisplayTodo = () => {
  const [todo, setTodo] = useState([]);
  const handleTodoList = ({ title, description }) => {
    const payload = {
      id: todo.length + 1,
      title,
      description,
      status: false,
    };
    setTodo([...todo, payload]);
  };
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  return (
    <div>
      <InputField Submit={handleTodoList} />
      <TodoList
        data={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default DisplayTodo;
