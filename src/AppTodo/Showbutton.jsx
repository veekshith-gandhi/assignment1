const ShowButton = ({ title, Toggle }) => {
  return (
    <button
      onClick={() => Toggle()}
      style={{
        float: "left",
        height: "35px",
        marginTop: "10px",
        background: " rgb(131, 148, 118)",
        border: "none",
        marginBottom: "10px",
      }}
    >
      {title}
    </button>
  );
};
export default ShowButton;
