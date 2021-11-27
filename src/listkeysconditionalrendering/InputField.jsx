import { useState } from "react";

const InputField = ({ Submit }) => {
  const payload = {
    title: "",
    description: "",
  };
  const [text, setText] = useState(payload);

  const handlText = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    Submit(text);
  };

  return (
    <div>
      <input
        name="title"
        placeholder="title"
        value={text.title}
        onChange={handlText}
        type="text"
      />
      <br />
      <input
        name="description"
        value={text.description}
        placeholder="description"
        onChange={handlText}
        type="text"
      />
      <br />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
export default InputField;
