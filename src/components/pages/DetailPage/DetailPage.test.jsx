import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage', () => {
  it('renders a character\'s DetailPage', async() => {
    render(<DetailPage match={{ params: { id: 1 } }}/>);

    const character = await screen.findByTestId('character');

    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
