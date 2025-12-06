import { useState, useEffect } from 'react';

export default function useColorTheme(defaultTheme, options = {}) {
  const { classNames = ['light-theme', 'dark-theme'] } = options;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Initialize theme from localStorage or default
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('colorTheme');
      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        setTheme(parsedTheme);
      } else {
        setTheme(defaultTheme);
        localStorage.setItem('colorTheme', JSON.stringify(defaultTheme));
      }
    }
  }, [defaultTheme]);

  useEffect(() => {
    // Update body class when theme changes
    if (typeof window !== 'undefined' && document.body) {
      document.body.className = theme;
    }
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === classNames[0] ? classNames[1] : classNames[0];
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('colorTheme', JSON.stringify(newTheme));
    }
  };

  return {
    value: theme,
    toggle
  };
}