import { create } from "zustand";
import { IStore } from "../interfaces";

const useStore = create<IStore>((set) => ({
  darkMode: true,
  setDarkMode: (val: boolean) => set(() => ({ darkMode: val })),
}));

export default useStore;
