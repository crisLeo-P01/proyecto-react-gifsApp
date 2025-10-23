import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Lista de gifs';
  const description = 'Test del parrafo de descripcion';

  test('should render the title correctly', () => {
    // Render the component with only the title. (Renderiza el componente con solo el título)
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when provided', () => {
    render(<CustomHeader title={title} description={description} />);

    // Verify the title rendering (Verifica si el título se renderiza correctamente)
    expect(screen.getByText(description)).toBeDefined();

    // Verify the description paragraph rendering (Verifica si el párrafo de descripción se renderiza correctamente).
    expect(screen.getByRole('paragraph')).toBeDefined();

    // Verify the paragraph content (Verifica el contenido del párrafo).
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    const divContainer = container.querySelector('.content-center');

    // Verificar el título.
    const h1 = divContainer?.querySelector('h1');
    expect(h1?.innerHTML).toBe(title);

    const paragraph = divContainer?.querySelector('p');
    expect(paragraph).toBeNull(); // Not exist the paragraph (No debe existir el párrafo)
  });
});
