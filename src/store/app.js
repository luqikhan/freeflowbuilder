import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  snapToGrid: false,
  showGrid: true,
  setProperty: (prop, v) => set((state) => ({...state, [prop]: v}))
}))