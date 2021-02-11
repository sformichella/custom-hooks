import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useToggleTheme } from '../state/theme';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

ThemeProvider.propTypes = {
  children: PropTypes.object
};
