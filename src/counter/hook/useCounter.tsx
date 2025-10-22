import { useState } from 'react';

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const handleSubtract = () => {
    setCounter(prev => prev - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return {
    // values
    counter,

    // Method / Actions
    handleSubtract,
    handleAdd,
    handleReset,
  };
};
