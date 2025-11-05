import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaPaintBrush } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full bg-card-background text-text-primary border border-border transition-colors duration-300"
    >
      {theme === 'light' && <FaMoon />}
      {theme === 'dark' && <FaPaintBrush />}
      {theme === 'dracula' && <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;
