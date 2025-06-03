// src/shared/components/ThemeToggle.tsx
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeStore } from '../state/store.theme';

const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeStore();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;