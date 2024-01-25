import React from "react";
import HeaderTitle from "../common/HeaderTitle";
import { jobExperience } from "../../utils/constants";
const Fade = require("react-reveal/Fade");

const Experience = () => {
  return (
    <Fade bottom>
      <div>
        <div>
          <HeaderTitle title="Experience" />
        </div>

        <div className="lg:mt-2">
          {jobExperience?.map((item) => {
            return (
              <div className="flex flex-col gap-y-5 gap-x-10 w-full px-4 py-8 rounded-md md:flex-row md:!w-fit md:mx-auto">
                <img
                  src={item?.organization?.image}
                  alt={item?.organization?.title}
                  className="w-[80px] h-[80px]"
                />

                <div className="first:!leading-0 leading-8 text-[14px] lg:text-[16px]">
                  <h1 className="font-bold">{item?.designation}</h1>
                  <h1>{item?.organization?.title}</h1>
                  <h1>{item?.duration}</h1>
                  <h1>{item?.location}</h1>
                  <h1>{item?.mainTitle}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
