import { IProject } from "../interfaces";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import SupportSystemImage from "../assets/Images/Projects/Support-System/image.webp";
import SupportSystemHoverImage from "../assets/Images/Projects/Support-System/hoverImage.webp";
import JobPortalImage from "../assets/Images/Projects/JobPortal/image.webp";
import JobPortalHoverImage from "../assets/Images/Projects/JobPortal/hoverImage.webp";
import PWIOIImage from "../assets/Images/Projects/PWIOI/image.webp";
import PWIOIHoverImage from "../assets/Images/Projects/PWIOI/hoverImage.webp";
import PWSkillsProfileImage from "../assets/Images/Projects/PWSkillsProfile/image.webp";
import PWSkillsProfileHoverImage from "../assets/Images/Projects/PWSkillsProfile/hoverImage.webp";
import PwSkillsCheckoutImage from "../assets/Images/Projects/PWSkillsCheckout/image.webp";
import PwSkillsCheckoutHoverImage from "../assets/Images/Projects/PWSkillsCheckout/hoverImage.webp";

const aboutContent = {
  text: "Hi there! I'm a seasoned Front-End Developer with expertise in UI/UX design, staying updated on industry trends. I'm passionate about crafting exceptional web experiences and proficient in Front-End Technologies. Additionally, I can handle MERN stack technologies. I thrive on challenges, love collaborative projects, and invite you to explore my portfolio. Let's connect for exciting web development opportunities!",
};

const linkedInURL = "https://www.linkedin.com/in/heyabrar";
const githubURL = "https://www.github.com/heyabrar";

const frontEndSkills = [
  {
    id: 1,
    image:
      "https://static-00.iconduck.com/assets.00/html5-icon-1010x1024-xtv3oxib.png",
    title: "HTML5",
  },
  {
    id: 2,
    image:
      "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
    title: "CSS3",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "React.js",
  },
  {
    id: 5,
    image:
      "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    title: "Redux.js",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    title: "Tailwind CSS",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    title: "TypeScript",
  },
  {
    id: 8,
    image:
      "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    title: "Next.js",
  },
  {
    id: 9,
    image:
      "https://archive.org/download/github.com-chakra-ui-chakra-ui_-_2020-02-13_17-20-29/cover.jpg",
    title: "Chakra-UI",
  },
  {
    id: 10,
    image:
      "https://jobkaehenry.gallerycdn.vsassets.io/extensions/jobkaehenry/zustand-snippet/1.0.1/1682180336770/Microsoft.VisualStudio.Services.Icons.Default",
    title: "Zustand",
  },
  {
    id: 11,
    image:
      "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
    title: "React Query",
  },
  {
    id: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    title: "SASS",
  },
  {
    id: 13,
    image:
      "https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
    title: "Bootstrap",
  },
  {
    id: 14,
    image:
      "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png",
    title: "Material UI",
  },
];

const backEndSkills = [
  {
    id: 1,
    image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    title: "Node.js",
  },
  {
    id: 2,
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    title: "MongoDB",
  },
  {
    id: 3,
    image:
      "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png",
    title: "Express.js",
  },
  {
    id: 4,
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    title: "Postman",
  },
];

const otherDevTools = [
  {
    id: 1,
    image:
      "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
    title: "Google Analytics",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png",
    title: "React Native",
  },

  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.png",
    title: "Figma",
  },

  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png",
    title: "Android Studio",
  },
  {
    id: 5,
    image:
      "https://static-00.iconduck.com/assets.00/google-tag-manager-icon-2048x2048-y375dol4.png",
    title: "Google Tag Manager",
  },
  {
    id: 6,
    title: "Google Search Console",
    image: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg",
  },
  {
    id: 7,
    title: "Asana",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-asana-3521284-2944703.png?f=webp",
  },
  {
    id: 8,
    title: "Stackblitz",
    image: "https://www.finsmes.com/wp-content/uploads/2022/04/stackblitz.jpeg",
  },
  {
    id: 9,
    title: "New relic",
    image:
      "https://seeklogo.com/images/N/new-relic-logo-E7CC1E9143-seeklogo.com.png",
  },
  {
    id: 10,
    title: "Sentry",
    image:
      "https://static-00.iconduck.com/assets.00/sentry-icon-512x460-s8hgd8yj.png",
  },
];

const versionControl = [
  {
    id: 1,
    image:
      "https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png",
    title: "GitHub",
  },
  {
    id: 2,
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    title: "Git",
  },
  {
    id: 3,
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png",
    title: "Bitbucket",
  },
];

const contactNumber = "+91 8217361455";
const contactEmail = "heyabrarkhan@gmail.com";

const projectsDetails: IProject[] = [
  {
    id: 1,
    title: "Support System",
    organization: "iNeuron.ai (PhysicsWallah)",
    duration: "2023-2024",
    description:
      "I am proud to highlight my significant contributions to the revolutionary edu-tech product, the Support System, launched by ineuron.ai. As a key member, I led the development of a Query detailed page with SSR, utilizing React Query to ensure optimal SEO performance. My responsibilities encompassed enhancing user engagement through the implementation of features such as adding, editing, and deleting comments, as well as editing and deleting queries. I also played a crucial role in establishing robust reporting mechanisms for both queries and comments.",
    description1:
      "Taking charge of optimizing the upvote and downvote features, I strategically minimized API calls, resulting in improved efficiency. My expertise extended to designing the hero section of the landing page, creating a compelling first impression for users. Furthermore, I contributed to an enhanced user experience by incorporating search filters into the Queries Listing. The Support System serves as a helpful platform for students enrolled in iNeuron courses, allowing them to post queries, engage in conversations, and benefit from my efforts in optimizing and enriching the platform.",
    image: SupportSystemImage,
    hoverImage: SupportSystemHoverImage,
    projectType: "",
    techStack:
      "Next.js | TypeScript | Tailwind | Zustand | React Quill | React Query | Socket.io",
    liveLink: "https://support.ineuron.ai",
    githubLink: "",
    flexRow: "lg:!flex-row",
    fade: "left",
  },
  {
    id: 2,
    title: "Job Portal",
    organization: "iNeuron.ai (PhysicsWallah)",
    duration: "2023-2023",
    description:
      "The Job Portal project represents a significant milestone in my professional journey, where I played a pivotal role in developing both the candidate and recruiter modules. On the candidate side, I spearheaded the entire development, introducing innovative features such as a robust job search engine, advanced filters for refining job searches based on specific criteria, the ability to save preferred jobs, and a seamless job application process with options for custom or default resume submissions. I also implemented a cutting-edge resume builder, empowering candidates to create personalized resumes tailored to their unique skills and experiences. Additionally, the platform offered mock tests for skills assessment, providing candidates with valuable insights into their readiness for various job opportunities",
    description1:
      "For candidates, the platform featured a comprehensive Candidate Dashboard, enhancing their ability to monitor and track the status of their applications and saved jobs. This not only streamlined the job application process but also provided a centralized hub for managing their job search journey.",
    description2:
      "On the recruiter side, the system facilitated simplified job posting, efficient management of postings, and seamless candidate searches. The platform's impact was notable, as it significantly streamlined the overall job search and recruitment processes for all users. Leveraging modern technologies, the project was dedicated to creating a user-friendly and responsive experience, ultimately enhancing the efficiency and effectiveness of the job-seeking and hiring processes. My active involvement in building the candidate side of the platform ensured that users experienced a seamless and feature-rich interface, making the Job Portal a valuable resource in the realm of online job platforms.",
    image: JobPortalImage,
    hoverImage: JobPortalHoverImage,
    projectType: "",
    techStack:
      "Next.js | TypeScript | Tailwind | Zustand | React Lottie | CK Editor | React Player",
    liveLink: "https://jobs.ineuron.ai",
    githubLink: "",
    flexRow: "lg:!flex-row-reverse",
    fade: "right",
  },
  {
    id: 3,
    title: "PW Institute of Innovation (PW IOI)",
    organization: "iNeuron.ai (PhysicsWallah)",
    duration: "2023-2023",
    description:
      "I took charge of constructing the primary landing page for PW IOI, focusing on creating a user-friendly and visually appealing interface. Furthermore, I actively participated in the implementation of the School of Management & the School of Technology, faithfully adhering to the designated design guidelines. The project achieved a triumphant live launch, showcasing the seamless integration of design and functionality.",
    image: PWIOIImage,
    hoverImage: PWIOIHoverImage,
    description1:
      "In just one week, I successfully completed this project, showcasing efficiency and dedication in delivering a high-quality outcome.",
    techStack: "Next.js | TypeScript | Tailwind | RachnaUI",
    liveLink: "https://pwioi.com/",
    githubLink: "",
    flexRow: "lg:!flex-row",
    fade: "left",
  },

  {
    id: 4,
    title: "Custom Checkout Page PW Skills",
    organization: "PW Skills (PhysicsWallah)",
    duration: "2023-2023",
    description:
      "The key achievements of this project include the successful creation and implementation of a customized checkout page seamlessly integrated with the Razorpay payment gateway. I designed a visually appealing and user-friendly interface that maintains brand consistency and responsiveness across various devices",
    description1:
      "The integration with Razorpay enables users to make secure transactions using diverse payment methods, ensuring a seamless and efficient payment process. Robust error handling mechanisms were implemented, providing users with clear payment confirmations upon success and guiding them through necessary steps in case of payment failures.",
    image: PwSkillsCheckoutImage,
    hoverImage: PwSkillsCheckoutHoverImage,
    projectType: "",
    techStack: "React | TypeScript | Tailwind | RachnaUI | Context API",
    liveLink: "https://www.pwskills.com",
    githubLink: "",
    flexRow: "lg:!flex-row-reverse",
    fade: "right",
  },

  {
    id: 5,
    title: "LogIn & Profile Page PW Skills",
    duration: "2023-2023",
    organization: "PW Skills (PhysicsWallah)",
    description:
      "In my initial position within the tech industry, I played a pivotal role in constructing both the login and profile pages for pwkills.com. I focused on designing the user interface for the login page, ensuring an intuitive and user-friendly experience.",
    description1:
      "Additionally, I developed the profile page, empowering users to seamlessly input and manage their profile details. The scope of my responsibilities included implementing key features such as uploading profile images from the local system and establishing a robust CRUD (Create, Read, Update, Delete) functionality. This encompassed providing users with the ability to not only update their information but also delete their accounts when needed.",
    image: PWSkillsProfileImage,
    hoverImage: PWSkillsProfileHoverImage,
    projectType: "",
    techStack: "React | TypeScript | Tailwind | RachnaUI",
    liveLink: "https://www.pwskills.com",
    githubLink: "",
    flexRow: "lg:!flex-row",
    fade: "left",
  },
];

const jobExperience = [
  {
    _id: 1,
    designation: "SDE - 1",
    organization: {
      title: "iNeuron.ai (PhysicsWallah) · E-Learning Providers",
      image:
        "https://media.licdn.com/dms/image/D560BAQF-jLf4vWUx9g/company-logo_200_200/0/1699514201876/ineuron_ai_logo?e=2147483647&v=beta&t=CNFSabNS2Dwrn6Ajq9v94rGzFkfuJp0kUm_s5cMNY-U",
    },
    duration: "Mar 2023 - Mar 2024",
    location: "Bengaluru, Karnataka, India  · Full-time · On-site",
    mainTitle: "Software Development Engineer -1 (Frontend Developer)",
    startDate: "2023-03-17",
    endDate: "2024-03-18",
  },
  {
    _id: 2,
    designation: "SDE - 1",
    organization: {
      title: "Seekho · Online Audio and Video Media",
      image:
        "https://play-lh.googleusercontent.com/xNIN7jOhQyMcwvpgIQaF81Blbn5crzjf7lao39rxabLR4Xl8jsEIBN2XTvoPMDAaQKo",
    },
    duration: "Mar 2024 - Present",
    location: "Bengaluru, Karnataka, India · Full-time · On-site",
    mainTitle: "Software Development Engineer -1 (Frontend Developer)",
    startDate: "2024-03-04",
    endDate: "",
  },
];

const initialProjectData = {
  description: "",
  description1: "",
  description2: "",
  title: "",
};

const whatIOffer = [
  {
    id: 1,
    title: "Web Development",
    desc: "Craft tailored websites for your unique needs.",
    icon: <FaCode className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />,
  },
  {
    id: 2,
    title: "User-Centric Design",
    desc: "Create exceptional user experiences through intuitive design.",
    icon: (
      <FaPaintBrush className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
    ),
  },
  {
    id: 3,
    title: "Stay Ahead of Trends",
    desc: "Dedicated to staying current with industry trends and innovations.",
    icon: (
      <FaArrowTrendUp className="w-[20px] h-[20px] md:w-[30px]  md:h-[30px]" />
    ),
  },
  {
    id: 4,
    title: "Collaborative Project Enthusiast",
    desc: "Love working in teams to bring ideas to life.",
    icon: <RiTeamFill className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />,
  },
  {
    id: 5,
    title: "Open for Exciting Opportunities",
    desc: "Connect for web development projects that inspire.",
    icon: <FaLightbulb className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />,
  },
  {
    id: 6,
    title: "Passionate Front-End Developer",
    desc: "Turning passion into pixel-perfect interfaces.",
    icon: (
      <FaHandHolding className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
    ),
  },
  {
    id: 7,
    title: "Client-Focused Development",
    desc: "Your goals guide the creation of impactful web solutions.",
    icon: <FaPeopleArrows className="w-[30px] h-[30px]" />,
  },
];

export {
  aboutContent,
  linkedInURL,
  frontEndSkills,
  backEndSkills,
  otherDevTools,
  versionControl,
  contactEmail,
  contactNumber,
  githubURL,
  projectsDetails,
  jobExperience,
  initialProjectData,
  whatIOffer,
};
