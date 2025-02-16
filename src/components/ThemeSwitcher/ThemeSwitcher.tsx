import { useTheme } from '@/context/ThemeContext';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-light-muted dark:bg-dark-muted text-light-text dark:text-dark-text transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      {theme === 'light' ? <RiMoonClearLine /> : <RiSunLine />}
    </button>
  );
}
