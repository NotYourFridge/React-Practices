import React, { useEffect, useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    if(count>10){
        alert("teller is groter dan 10");
    }
  }, [count]);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default CounterApp;