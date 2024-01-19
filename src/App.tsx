import "./App.css";
import { useRef } from "react";
import { handleScrollTo } from "./utils/helper/helperFunctions";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Container from "./Components/common/Container";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Swipe from "./assets/Icons/Swipe";
import MobileSwipe from "./assets/Icons/MobileSwipe";
import useStore from "./store";
import Glow from "./assets/Icons/Glow";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const { darkMode } = useStore();

  const navLinks = [
    {
      _id: 0,
      title: "HOME",
      onClick: () => handleScrollTo(homeRef),
    },
    {
      _id: 1,
      title: "ABOUT",
      onClick: () => handleScrollTo(aboutRef),
    },

    {
      _id: 2,
      title: "EXPERIENCE",
      onClick: () => handleScrollTo(experienceRef),
    },

    {
      _id: 3,
      title: "PROJECTS",
      onClick: () => handleScrollTo(projectRef),
    },

    {
      _id: 4,
      title: "SKILLS",
      onClick: () => handleScrollTo(skillsRef),
    },

    {
      _id: 5,
      title: "CONTACT",
      onClick: () => handleScrollTo(contactRef),
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-black text-gray-200" : "bg-customLavender text-gray-700"
      } relative`}
    >
      <div>
        <Navbar navLinks={navLinks} />
        <MobileSwipe className="absolute top-10 lg:hidden" />
        {darkMode && (
          <Glow className="hidden lg:!block lg:absolute  lg:text-customGreen lg:w-[100%]" />
        )}
        <Container>
          <div className="pt-36 lg:pt-14" ref={homeRef}>
            <HeroSection aboutRef={aboutRef} />
          </div>

          <div className="mt-14 lg:mt-36" ref={aboutRef}>
            <About />
          </div>

          <div className="mt-14 lg:mt-36" ref={experienceRef}>
            <Experience />
          </div>

          <div className="mt-14 lg:mt-36" ref={projectRef}>
            <Projects />
          </div>

          <div className="mt-14 lg:mt-36" ref={skillsRef}>
            <Skills />
          </div>

          <div className="mt-14 pb-10 lg:mt-48" ref={contactRef}>
            <Contact />
          </div>
        </Container>
      </div>
      <Swipe className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:rotate-180" />
      <MobileSwipe className="absolute bottom-0 right-0 rotate-180 lg:hidden" />
    </div>
  );
}

export default App;
