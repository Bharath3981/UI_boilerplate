// src/shared/state/theme.store.ts
import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface ThemeStore {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  mode: 'light',
  toggleMode: () =>
    set({ mode: get().mode === 'light' ? 'dark' : 'light' }),
}));