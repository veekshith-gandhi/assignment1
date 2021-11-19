import style from "./list.module.css";

const TodoList = ({ title, status, handleDelete, id, handleToggle }) => {
  return (
    <div className={style.list}>
      <>{`${title} - ${status}`}</>
      <button onClick={() => handleDelete(id)}>DEL</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
};
export default TodoList;
