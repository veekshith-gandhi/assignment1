const AxiosDisplay = ({ id, title, status, handleDelete }) => {
  return (
    <div>
      {title} - {status ? "Done" : "Pending"}{" "}
      <button onClick={() => handleDelete(id)}>Del</button>
    </div>
  );
};
export default AxiosDisplay;
