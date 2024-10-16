import { useState } from "react";
import "../../App.css";

const Count = () => {
  let [count, setCount] = useState(0);

  const inc = () => {
    // console.log("inc complete ");
    setCount(++count);
  };
  const dec = () => {
    // console.log("dec complete ");
    if (count > 0) {
      setCount(--count);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
   
    <div className="card">
      <div>
        <div className="layout">
          <button onClick={dec} className="btn1">
            -
          </button>
          <h1>{count}</h1>
          <button onClick={inc} className="btn2">
            +
          </button>
        </div>
        <div className="cen">
          <button onClick={reset} className="btn3">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Count;
