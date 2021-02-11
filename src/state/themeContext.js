import React, { createContext, useContext } from 'react';
import { useTheme } from '../state/theme';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
