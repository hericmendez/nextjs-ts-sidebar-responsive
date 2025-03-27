"use client";
import { useEffect, useState } from "react";

const ThemeLoader = ({ onLoad }: { onLoad: (theme: string) => void }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "auto";
    onLoad(savedTheme);
    setLoaded(true);
  }, [onLoad]);

  if (!loaded) return <div style={{ display: "none" }} />; // Evita o "flash" de tema errado
  return null;
};

export default ThemeLoader;
