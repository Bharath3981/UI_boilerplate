// src/config/theme/light.ts
import { createTheme } from '@mui/material/styles';
import { shape, typography } from './base';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#198754', // green used in sidebar & buttons
    },
    secondary: {
      main: '#6c757d',
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#5e6c84',
    },
    error: {
      main: '#dc3545',
    },
    success: {
      main: '#198754',
    },
  },
  typography,
  shape,
});