import useStore from "../../store";
import { aboutContent, linkedInURL } from "../../utils/constants";
import HeaderTitle from "../common/HeaderTitle";
const Fade = require("react-reveal/Fade");

const About = () => {
  const { darkMode } = useStore();
  return (
    <div>
      <Fade bottom>
        <div>
          <HeaderTitle title="About Me" />
        </div>

        <h1 className="mt-2 text-[14px] leading-[25px] font-normal text-center lg:w-[90%] lg:mx-auto lg:text-[16px] lg:leading-[30px] lg:mt-4">
          {aboutContent.text}
        </h1>

        <div className="flex justify-center mt-4">
          <a href={linkedInURL} target="_blank" rel="noreferrer">
            <button
              className={`border font-medium text-[12px] rounded-[8px] lg:rounded-md !px-4 py-2 lg:text-[14px] lg:font-normal ${
                darkMode ? "border-white" : "border-black"
              }`}
            >
              Follow on LinkedIn
            </button>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default About;
