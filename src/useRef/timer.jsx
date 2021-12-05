import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [value, setValue] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return pause;
  }, []);

  const start = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setValue((prev) => prev + 1);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    pause();
    setValue(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>{value}</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Timer;
