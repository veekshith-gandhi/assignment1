const TodoList = ({ data, handleToggle, handleDelete }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              {`${item.title}-${item.description}-${item.status}`}
              <button onClick={() => handleToggle(item.id)}>Toggle</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default TodoList;
