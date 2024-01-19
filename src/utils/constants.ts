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
import { IProject } from "../interfaces";

const aboutContent = {
  text: "Hello! I'm Abrar Khan, a Front-End Developer at Ineuron.ai, now part of PhyicsWallah. I'm passionate about crafting exceptional web experiences. With expertise in Front-End Technologies. I thrive on challenges, stay current with trends, and love collaborative projects. Explore my portfolio, and let's connect for exciting opportunities in web development!",
};

const linkedInURL = "https://www.linkedin.com/in/heyabrar";
const githubURL = "https://www.github.com/heyabrar";

const frontEndSkills = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
    title: "HTML5",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
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
    title: "React.Js",
  },
  {
    id: 5,
    image:
      "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    title: "Redux.Js",
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
      "https://i.ytimg.com/an/cxm6FNyKzwA/3903739474801779860_mq.jpg?v=62a9dfef",
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
    id: 111,
    image:
      "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
    title: "React Query",
  },
];

const backEndSkills = [
  {
    id: 1,
    image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    title: "Node.Js",
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
    title: "Express.Js",
  },
  {
    id: 4,
    image:
      "https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp",
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
      "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
    title: "Figma",
  },

  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png",
    title: "Android Studio",
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
      "I am proud to showcase my impactful contributions to the revolutionary edu-tech product, the Support System, launched by ineuron.ai. I spearheaded the development of a Query detailed page with SSR for optimal SEO performance, utilizing React Query. My responsibilities extended to enhancing user engagement by enabling functionalities such as adding comments, editing comments, deleting comments, editing queries, and deleting queries. Additionally, I implemented robust reporting mechanisms for both queries and comments.",
    description1:
      "I took charge of optimizing the upvote and downvote features, strategically minimizing API calls for improved efficiency. My expertise also came into play in designing the hero section of the landing page, crafting an impactful first impression for users. I further enhanced the user experience by incorporating search filters into the Queries Listing.",
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
      "The Job Portal project stands as a significant milestone in my professional journey, where I actively contributed to the development of both candidate and recruiter modules. For candidates, the platform facilitated job applications, offered a custom resume builder, job search filters and provided mock tests for skills assessment. With a Candidate Dashboard to enhance and track the status of the applications and saved jobs.",
    description1:
      "On the recruiter side, the system streamlined job posting, management, and candidate searches. The platform's impact was notable, simplifying the job search and recruitment processes for all users. Leveraging modern technologies, the project aimed to create a user-friendly and responsive experience.",
    description2:
      "Our collaborative efforts were marked by a total pod of 5 individuals, consisting of 3 backend developers and 2 frontend developers. This dynamic team structure played a crucial role in achieving our project goals and ensuring a seamless integration of both candidate and recruiter functionalities.",
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
    designation: "SDE-1",
    organization: {
      title: "iNeuron.ai (PhysicsWallah) · Full-time",
      image:
        "https://media.licdn.com/dms/image/D560BAQF-jLf4vWUx9g/company-logo_100_100/0/1699514201876/ineuron_ai_logo?e=1710374400&v=beta&t=yXXU-iLVEW3c2jc0iXQPcGqoeqNOpIjHMSVcy7bWWsc",
    },
    duration: "Mar 2023 - Present",
    location: "Bengaluru, Karnataka, India · On-site",
    mainTitle: "Software Development Engineer -1 (Frontend Developer)",
  },
];

const initialProjectData = {
  description: "",
  description1: "",
  description2: "",
  title: "",
};

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
};
