import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';
import { ThemeProvider } from '../../../state/themeContext';

describe('DetailPage', () => {
  it('renders a character\'s DetailPage', async() => {
    render(
      <ThemeProvider>
        <DetailPage match={{ params: { id: 1 } }}/>
      </ThemeProvider>
    );

    const character = await screen.findByTestId('character');

    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
