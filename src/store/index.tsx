import { create } from "zustand";
import { IProjectModalDetails, IStore } from "../interfaces";
import { initialProjectData } from "../utils/constants";

type x = {
  description: string;
  description1: string;
};
const useStore = create<IStore>((set) => ({
  darkMode: true,
  projectData: initialProjectData,
  setDarkMode: (val: boolean) => set(() => ({ darkMode: val })),
  setProjectData: (val: IProjectModalDetails) =>
    set(() => ({ projectData: val })),
}));

export default useStore;
