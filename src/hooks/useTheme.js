import { useLayoutEffect, useState } from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || defaultTheme
  );

  useLayoutEffect(() => {
    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMediaQuery.addEventListener('change', handleSystemThemeChange);

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);

    // Cleanup event listener on unmount
    return () => {
      darkThemeMediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return { theme, setTheme };
};
