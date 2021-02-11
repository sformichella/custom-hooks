import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

    const themeCheckbox = await screen.findByLabelText('Light/Dark Theme:');
    const themedDiv = await screen.findByTestId('home-container');

    fireEvent.click(themeCheckbox);

    return waitFor(() => {
      expect(themedDiv).toHaveClass('dark');
    });
  });
});
