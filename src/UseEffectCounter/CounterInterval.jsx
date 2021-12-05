import { useEffect, useState } from "react";

const CounterInterval = () => {
  const [value, setValue] = useState(5);
  const [hide, setHide] = useState(true);
  useEffect(() => {
    let isMounted = false;
    const id = setInterval(() => {
      console.log(Date.now());
      if (!isMounted) {
        setValue((prev) => {
          if (prev + 1 === 10) {
            clearInterval(id);
          }
          return prev + 1;
        });
      }
    }, 1000);
    return () => {
      isMounted = true;
      console.log("cleaning...");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      {hide ? <p>count :{value}</p> : false}
      <button
        onClick={() => {
          // setValue(null);
          setHide(!hide);
        }}
      >
        Hide
      </button>
    </div>
  );
};
export default CounterInterval;
