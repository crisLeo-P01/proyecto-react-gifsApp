import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { GifsApp } from '../GifsApp';

describe('GifsApp', () => {
  test('should render component property', () => {
    const { container } = render(<GifsApp />);

    expect(container).toMatchSnapshot();
  });
});
