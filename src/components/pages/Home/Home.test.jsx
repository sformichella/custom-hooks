import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders a character list', async() => {
    render(<Home />);

    const list = await screen.findByTestId('list');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
