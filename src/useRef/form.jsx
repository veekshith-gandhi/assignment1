import { useRef, useState, useEffect } from "react";

const Form = () => {
  const [image, setImage] = useState(null);
  const imgRef = useRef(null);
  const refTop = useRef(null);
  const focusRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    maritalstatus: "",
    image: null,
  });

  const handleFocus = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  const handleScrollTop = () => {
    if (refTop.current) {
      refTop.current.scrollTop = 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const file = imgRef.current.files[0];
    let src = null;
    if (file) {
      //   console.log("useeffect", imgRef.current.files[0]);
      src = URL.createObjectURL(file);
    }
    setImage(src);
  };
  const handleImageChange = (e) => {
    const file = e.target.files;
    console.log(file);

    setFormState({ ...formState, image: file });
  };

  const handleOnchangeForm = (e) => {
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };
  return (
    <>
      <button onClick={handleScrollTop}>Top</button>
      <br />
      <div>
        <button onClick={handleFocus}>Focus</button>
        <input type="text" ref={focusRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid red", display: "inline-block", margin: 20 }}
      >
        <div>
          <input
            placeholder="name"
            type="text"
            onChange={handleOnchangeForm}
            name="name"
          />
        </div>
        <div>
          <select onChange={handleOnchangeForm} name="gender">
            <option value="Male" key="male">
              Male
            </option>
            <option value="Female" key="Female">
              Female
            </option>
          </select>
        </div>
        <div>
          <label>Marital status</label>
          <input
            type="checkbox"
            checked={formState.maritalstatus}
            name="maritalstatus"
            onChange={handleOnchangeForm}
          />
        </div>
        <div>
          {" "}
          <input
            type="file"
            multiple
            ref={imgRef}
            onChange={handleImageChange}
          />
        </div>
        <input type="submit" />
      </form>
      <div
        ref={refTop}
        style={{
          //   marginTop: 40,
          border: "1px solid black",
          width: 220,
          height: 250,
          padding: 20,
          margin: "auto",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: 450,
            border: "1px solid black",
          }}
        ></div>
      </div>
      {image && <img style={{ width: 200 }} src={image} alt="name" />}
    </>
  );
};

export default Form;
