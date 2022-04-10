import React, { useState } from "react";

const Ex2 = () => {
  const [color, setcolor] = useState("gray");

  const handleRedColor = () => {
      const color="red"
setcolor(color)
  };
  const handleYellowColor=()=>{
      const color="yellow"
      setcolor(color)
  }
  const handleGreenColor=()=>{
    const color="Green"
    setcolor(color)
  }
  return (
    <div style={{ backgroundColor: color }}>
      <p>BackGround of Page</p>
      <button onClick={handleRedColor}>Red</button>
      <button onClick={handleYellowColor}>yellow</button>
      <button onClick={handleGreenColor}>Green</button>
    </div>
  );
};
export default Ex2;
