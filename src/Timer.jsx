import { useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setCount((prevcount) => prevcount + 1);
      }, 0.001);
    }
  };

  const stopTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };

  const resetTimer = () => {
    setCount(0);
    stopTimer();
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
}

export default Timer;
