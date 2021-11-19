import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setTcount] = useState(0);
  const increment = () => {
    setTcount(count + 1);
  };
  const decrement = () => {
    setTcount(count - 1);
  };
  const multipleOfTwo = () => {
    setTcount(count * 2);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <Button handleChange={increment} title={"+"} />
      <Button handleChange={decrement} title={"-"} />
      <Button handleChange={multipleOfTwo} title={"2X"} />
    </div>
  );
};
export default Counter;
