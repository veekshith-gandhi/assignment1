const Button = ({ title, handleChange }) => {
  return <button onClick={handleChange}>{title}</button>;
};
export default Button;
