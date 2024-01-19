import { create } from "zustand";
import { IProjectModalDetails, IStore } from "../interfaces";
import { initialProjectData } from "../utils/constants";

const useStore = create<IStore>((set) => ({
  darkMode: true,
  projectData: initialProjectData,
  setDarkMode: (val: boolean) => set(() => ({ darkMode: val })),
  setProjectData: (val: IProjectModalDetails) =>
    set(() => ({ projectData: val })),
}));

export default useStore;
