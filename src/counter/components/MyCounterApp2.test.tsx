import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

// Mocks de las funciones del hook useCounter
const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

// Mock del hook useCounter
vi.mock('../hook/useCounter', () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  }),
}));

describe('MyCounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      `Contador: 20`
    );

    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: '+1' });

    fireEvent.click(button); // Simula el clic en el botón +1

    expect(handleAddMock).toHaveBeenCalled(); // Verifica que se haya llamado a handleAdd
    expect(handleAddMock).toHaveBeenCalledTimes(1); // Verifica que se haya llamado una vez
    expect(handleSubtractMock).not.toHaveBeenCalled(); // Verifica que no se haya llamado a handleSubtract
    expect(handleResetMock).not.toHaveBeenCalled(); // Verifica que no se haya llamado a handleReset
  });
});
