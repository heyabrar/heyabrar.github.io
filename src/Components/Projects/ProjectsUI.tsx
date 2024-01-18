import { CiCalendarDate } from "react-icons/ci";
import { IProject } from "../../interfaces";
import Organization from "../Icons/Organization";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
const Fade = require("react-reveal/Fade");

const ProjectsUI = ({
  duration,
  fade,
  flexRow,
  hoverImage,
  id,
  image,
  liveLink,
  organization,
  techStack,
  title,
  description1,
  description,
  githubLink,
  projectType,
}: IProject) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <div className="first:mt-10 mt-14 lg:mt-20">
      <Fade left={fade === "left"} right={fade === "right"}>
        <div
          className={`flex flex-col gap-x-10 gap-y-8 first:mt-1 mt-10  items-center lg:mt-20`}
        >
          <div className="md:!w-[60%] relative">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <img src={image} alt={title} className="hover:opacity-0" />
              <img
                src={hoverImage}
                alt={title}
                className="opacity-0 absolute top-0 hover:opacity-100"
              />
            </a>
          </div>

          <div className="w-full">
            <h1 className="text-[16px] lg:text-[18px]">{title}</h1>
            {organization && (
              <div className="flex gap-x-2 items-center mt-2">
                <Organization className="w-[20px]" />
                <h1 className="text-[14px]">{organization}</h1>
              </div>
            )}

            <div className="flex gap-x-2 items-center mt-2">
              <CiCalendarDate className="text-customGreen w-[20px] h-[20px]" />
              <h1 className="text-[14px]">{duration}</h1>
            </div>

            <div
              className={`${
                readMore ? "h-auto" : "h-[90px] lg:h-[100px]"
              } overflow-hidden`}
            >
              <h1 className="text-[12px] mt-2 leading-[20px] lg:text-[15px] lg:leading-[30px]">
                {description}
              </h1>

              {description1 && (
                <h1 className="text-[12px] mt-2 leading-[20px] lg:text-[15px] lg:leading-[30px]">
                  {description1}
                </h1>
              )}
            </div>

            <button
              className="text-[10px] text-customGreen lg:!text-[13px] lg:mt-3"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " Read Less....." : " Read More....."}
            </button>

            {projectType && (
              <h1 className="text-[12px] mt-4 leading-[20px] lg:text-[14px] lg:leading-[25px]">
                {projectType}
              </h1>
            )}

            <h1 className="mt-4 text-[14px] lg:text-[16px]">Tech Stack</h1>
            <h1 className="mt-2 text-[12px] lg:text-[14px]">{techStack}</h1>

            <div className="flex gap-x-4 mt-4">
              <a href={liveLink} target="_blank" rel="noreferrer">
                <AiFillChrome className="w-[25px] h-[25px] hover:animate-spin" />
              </a>
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <AiFillGithub className="w-[25px] h-[25px] hover:animate-bounce" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectsUI;
