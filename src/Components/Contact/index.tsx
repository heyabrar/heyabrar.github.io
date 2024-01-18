import {
  contactEmail,
  contactNumber,
  githubURL,
  linkedInURL,
} from "../../utils/constants";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import AK from "../Icons/AK";
import useStore from "../../store";
const Fade = require("react-reveal/Fade");

const Contact = () => {
  const { darkMode } = useStore();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Fade bottom>
      <div
        className={`hidden md:flex justify-between pb-10 border-b ${
          darkMode ? "border-white" : "border-black"
        }`}
      >
        <div>
          <AK />
        </div>
        <div className="flex gap-x-10 items-center">
          <h1 className="text-[14px]">{contactNumber}</h1>
          <h1 className="text-[14px]">{contactEmail}</h1>

          <div className="flex gap-x-10 items-center">
            <a href={githubURL} target="_blank" rel="noreferrer">
              <BsGithub className="w-[25px] h-[25px]" />
            </a>
            <a href={linkedInURL} target="_blank" rel="noreferrer">
              <BsLinkedin className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="border-b pb-4 border-gray-500 block md:hidden">
        <div className="flex justify-between">
          <AK />
          <div className="flex gap-x-10 items-center">
            <a href={githubURL} target="_blank" rel="noreferrer">
              <BsGithub className="w-[25px] h-[25px]" />
            </a>
            <a href={linkedInURL} target="_blank" rel="noreferrer">
              <BsLinkedin className="w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
        <div className="flex justify-around mt-3">
          <h1 className="text-[12px]">{contactNumber}</h1>
          <h1 className="text-[12px]">{contactEmail}</h1>
        </div>
      </div>
      <h1 className="text-[12px] text-center mt-10 lg:text-[14px]">
        Designed and Developed by Abrar Khan
      </h1>
      <h1 className="text-[12px] text-center mt-2 lg:text-[14px] lg:mt-4 flex items-center justify-center gap-x-1">
        Copyrights
        <span>
          <AiOutlineCopyright />
        </span>
        {currentYear}
      </h1>
    </Fade>
  );
};

export default Contact;
