"use client";
import { createContext, useContext, useEffect, useState, ReactNode, Suspense } from "react";
import ThemeLoader from "./ThemeLoader";

const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void } | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  // Função para aplicar o tema
  const applyTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    if (newTheme !== "auto") {
      document.documentElement.dataset.theme = newTheme;
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.dataset.theme = mediaQuery.matches ? "dark" : "light";

    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  };

  // Aplicar o tema sempre que o estado mudar
  useEffect(() => {
    if (theme) applyTheme(theme);
  }, [theme]);

  return (
    <Suspense fallback={<div style={{ display: "none" }} />}>
      <ThemeLoader onLoad={applyTheme} />
      {theme && (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      )}
    </Suspense>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
