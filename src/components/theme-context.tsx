"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Simplified to only support light theme as per requirements
type Theme = "light";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always use light theme
  const [theme] = useState<Theme>("light");

  useEffect(() => {
    // Always apply light theme
    applyTheme();
  }, []);

  const applyTheme = () => {
    const root = document.documentElement;
    // Remove any theme classes and always add light
    root.classList.remove("dark");
    root.classList.add("light");
  };

  const value = {
    theme,
    // This is a no-op function since we only support light theme
    setTheme: () => {
      // Do nothing - we only support light theme
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
