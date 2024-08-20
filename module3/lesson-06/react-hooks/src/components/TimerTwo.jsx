import React, { useState, useEffect } from "react";       // <== IMPORT
 
function TimerTwo() {
  const [count, setCount] = useState(0); // --> Step 1
 
  // Add the effect in the function body --> Step 3
  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    
  }, [] );  // <--  [] means: Run the effect only once, after initial render
 
//  --> Step 2
  return (
    <div className="Timer"> 
      <h2>Timer Two</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerTwo;