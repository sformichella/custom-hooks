import { useState } from 'react';

const useToggleTheme = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(theme => !theme);
  };

  return { theme, toggleTheme };
};

export { useToggleTheme };
