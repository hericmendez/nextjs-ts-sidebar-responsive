import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  if (!theme) return null; // Evita erro caso o tema ainda esteja carregando

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;
