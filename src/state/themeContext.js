import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
