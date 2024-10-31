import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('ToDo', () => {
  // Render the App component
  const { getByText, getAllByText } = render(<App />);

  // Test that 'To-Do List' heading is in the document
  expect(getByText('To-Do List')).not.toBeNull();

  // Test that there is at least one 'Remove' button in the document
  expect(getAllByText('Remove').length).toBeGreaterThan(0);
});
