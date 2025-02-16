import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme as 'light' | 'dark');
      setTheme(savedTheme as 'light' | 'dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      applyTheme(initialTheme);
      setTheme(initialTheme);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
