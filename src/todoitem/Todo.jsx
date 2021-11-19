import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const handleTodoList = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todo.length + 1,
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
    <>
      <Input handleTodoList={handleTodoList} />
      {todo.map((item) => {
        return (
          <TodoList
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
};
export default Todo;
