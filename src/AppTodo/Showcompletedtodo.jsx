import style from "./input.module.css";
const CompletedTodo = ({ title }) => {
  return (
    <div
      className={style.displayBox}
      style={{
        marginTop: "10px",
        padding: "5px",
        background: "white",
      }}
    >
      <input type="checkbox" defaultChecked />
      <label>{title}</label>
    </div>
  );
};
export default CompletedTodo;
