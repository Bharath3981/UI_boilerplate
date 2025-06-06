// src/config/theme/dark.ts
import { createTheme } from '@mui/material/styles';
import { shape, typography } from './base';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#20c997', // brighter green in dark mode
    },
    secondary: {
      main: '#adb5bd',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ced4da',
    },
    error: {
      main: '#ff6b6b',
    },
    success: {
      main: '#63e6be',
    },
  },
  typography,
  shape,
});