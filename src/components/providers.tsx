"use client";

import React from 'react';
import { ThemeProvider } from '@/components/theme-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
