import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

test('Renders without crashing', () => {
  render(<Button>Test</Button>);
  expect(screen.queryByText('Test')).toBeInTheDocument();
});
