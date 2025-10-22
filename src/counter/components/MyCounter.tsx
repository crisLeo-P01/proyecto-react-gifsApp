import { useState } from 'react';

export const MyCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleSubtract = () => {
    setCounter(prev => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Contador: {counter}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
      </div>
    </>
  );
};
