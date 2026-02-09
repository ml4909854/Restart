import React, { useState, useCallback } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const FaltuFunction = useCallback(() => {
    console.log("Faltu function called");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Child faltu={FaltuFunction} />
    </div>
  );
};

export default UseCallback;
