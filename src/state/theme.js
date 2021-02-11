import { useState } from 'react';

const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme => {
      if(theme === 'light') return 'dark';
      else return 'light';
    });
  };

  return { theme, toggleTheme };
};

export { useToggleTheme };
