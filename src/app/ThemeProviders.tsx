// src/app/Providers.tsx
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../config/theme/index';
import { useThemeStore } from '../shared/state/store.theme';

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeStore((s) => s.mode);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;