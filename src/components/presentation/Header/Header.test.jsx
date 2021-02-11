import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../../state/themeContext';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Header title="Home" />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
