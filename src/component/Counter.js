import React, { useState } from "react";

const Counter = ({ setCounter }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    setCounter(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
    setCounter(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        className="w-10 h-10 flex justify-center items-center text-4xl rounded shadow-sm bg-white-secondary text-black-third"
      >
        -
      </button>
      <span className="text-gray-700 text-lg">{count}</span>
      <button
        onClick={increment}
        className="w-10 h-10 flex justify-center items-center text-4xl rounded shadow-sm bg-white-secondary text-black-third"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
