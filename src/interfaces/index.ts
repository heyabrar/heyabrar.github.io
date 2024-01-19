interface ISectionRefs {
  navLinks: {
    _id: number;
    title: string;
    onClick: () => void;
  }[];
}

interface IProject {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description?: string;
  description1?: string;
  description2?: string;
  image: string;
  hoverImage: string;
  projectType?: string;
  techStack: string;
  liveLink: string;
  githubLink?: string;
  flexRow: string;
  fade: string;
}

interface IProjectModalDetails {
  description: string;
  description1: string;
  description2: string;
  title?: string;
}
interface IStore {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  projectData: IProjectModalDetails;
  setProjectData: (val: IProjectModalDetails) => void;
}

export type { ISectionRefs, IProject, IStore, IProjectModalDetails };
