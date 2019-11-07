import React, { useState, useEffect } from 'react';

function StubbornState() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [functions, setFunctions] = useState({});

  function makeAFunction() {
    const theFunction = () => {
      // this one won't work
      setX(x + 1)
      // this one will
      setY(y => y + 1)
    }

    setFunctions({theFunction});
  }

  if (!functions.theFunction) {
    makeAFunction();
  }

  return (
    <button onClick={functions.theFunction}>Click me ({x}, {y})</button>
  );
}

export default StubbornState
