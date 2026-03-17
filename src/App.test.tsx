import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

test('renders the 1625 AutoLab navbar brand', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const brandElements = screen.getAllByText(/autolab/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
