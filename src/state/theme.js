import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(theme => !theme);
  };

  return { theme, toggleTheme };
};

export { useTheme };
