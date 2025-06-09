import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders EvenStevens™ Parity Oracle UI', () => {
  render(<App />);
  expect(screen.getByText(/EvenStevens™ Parity Oracle/)).toBeInTheDocument();
});

test('refuses to use % operator, even in jest', () => {
  expect(() => require('../../../../shared/utils/noModuloLinter')('return n % 2 === 0;')).toThrow();
});
