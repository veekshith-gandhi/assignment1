const TodoList = ({ title, status, handleDelete, id, handleToggle }) => {
  return (
    <div>
      <>{`${title} - ${status}`}</>
      <button onClick={() => handleDelete(id)}>DEL</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
};
export default TodoList;
