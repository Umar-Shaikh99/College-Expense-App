// src/app/config/zustandPersist.ts
import { mmkv } from './mmkv';

// MMKV based storage adapter for Zustand's persist middleware
export const zustandMMKVStorage = {
  setItem: (name: string, value: string): void => {
    mmkv.set(name, value);
  },

  getItem: (name: string): string | null => {
    const value = mmkv.getString(name);
    return value ?? null;
  },

  removeItem: (name: string): void => {
    mmkv.remove(name);
  },
};
