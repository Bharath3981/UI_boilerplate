// src/shared/state/theme.store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark';

interface ThemeStore {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const useThemeStore = create(
  persist<ThemeStore>(
    (set, get) => ({
      mode: 'light',
      toggleMode: () =>
        set({ mode: get().mode === 'light' ? 'dark' : 'light' }),
    }),
    {
      name: 'theme-store', // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);