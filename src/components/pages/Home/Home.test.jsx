import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { ThemeProvider } from '../../../state/themeContext';

describe('Home', () => {
  it('renders a character list', async() => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );

    const list = await screen.findByTestId('list');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });

  it('changes the theme from light to dark', async() => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
  });
});
