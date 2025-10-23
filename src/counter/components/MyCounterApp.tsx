import { useCounter } from '../hook/useCounter';

export const MyCounterApp = () => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter();

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
