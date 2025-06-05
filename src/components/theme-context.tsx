"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Simplified to only support light theme as per requirements
type Theme = "light";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme: Theme = "light";

  useEffect(() => {
    // Always apply light theme
    const root = document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
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
