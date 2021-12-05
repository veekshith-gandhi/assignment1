import { useRef, useState, useEffect } from "react";

const Form = () => {
  const [image, setImage] = useState(null);
  const imgRef = useRef(null);
  const refTop = useRef(null);

  const handleScrollTop = () => {
    if (refTop.current) {
      refTop.current.scrollTop = 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = imgRef.current.files[0];
    let src = null;
    if (file) {
      console.log("useeffect", imgRef.current.files[0]);
      src = URL.createObjectURL(file);
    }
    setImage(src);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file:", file);
  };
  console.log(imgRef);
  console.log("src", image);
  return (
    <>
      <button onClick={handleScrollTop}>Top</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="file" multiple ref={imgRef} onChange={handleImageChange} />
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
