import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// test('renders a button and handles click event', () => {
//   render(<App />);
  
//   // Check if button exists
//   const buttonElement = screen.getByRole('button', { name: /Click Me/i });
//   expect(buttonElement).toBeInTheDocument();

//   // Simulate click event
//   fireEvent.click(buttonElement);
  
//   // Example assertion: Ensure button remains in the document
//   expect(buttonElement).toBeInTheDocument();
// });