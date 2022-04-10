import React, { useState } from "react";

const Ex1 = () => {
  const [count, setcount] = useState(0);

  const handleIncrement = () => {
    setcount(prev=>prev+1);
  };
  const handleDecrement = () => {
    setcount(prev=>prev-1);
  };
  const handleRest =()=>{
      setcount (0)
  }


  return (
    <div>
      <p>The count is : {count}</p>
      <button onClick={handleIncrement}>+++</button>
      <button onClick={handleDecrement}>---</button>
      <button onClick={handleRest}>reset</button>
    </div>
  );
};
export default Ex1;
