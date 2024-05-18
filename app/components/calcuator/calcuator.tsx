  "use client"

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handlePercentage = () => {
    setInput((parseFloat(input) / 100).toString());
  };

  const handleSquare = () => {
    setInput((parseFloat(input) ** 2).toString());
  };

  const handleSquareRoot = () => {
    setInput(Math.sqrt(parseFloat(input)).toString());
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="container mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-md max-w-xs">
      <input
        className="mb-2 px-2 py-1 w-full border border-gray-300 rounded-md"
        type="text"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '%', 'x²', '√'].map((btn, index) => (
          <button
            key={index}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => {
              if (btn === 'C') {
                handleClear();
              } else if (btn === '=') {
                handleCalculate();
              } else if (btn === '%') {
                handlePercentage();
              } else if (btn === 'x²') {
                handleSquare();
              } else if (btn === '√') {
                handleSquareRoot();
              } else {
                handleClick(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
        <button
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={handleDelete}
        >
          DEL
        </button>
        <button
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => handleClick('/')}
        >
          ÷
        </button>
      </div>
    </div>
  );
};

export default Calculator;
