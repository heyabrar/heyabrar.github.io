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
  image: string;
  hoverImage: string;
  projectType?: string;
  techStack: string;
  liveLink: string;
  githubLink?: string;
  flexRow: string;
  fade: string;
}

interface IStore {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export type { ISectionRefs, IProject, IStore };
