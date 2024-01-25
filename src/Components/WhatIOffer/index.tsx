import { useEffect, useState } from "react";
import { whatIOffer } from "../../utils/constants";
import HeaderTitle from "../common/HeaderTitle";
import useStore from "../../store";
const Fade = require("react-reveal/Fade");

const WhatIOffer = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { darkMode } = useStore();

  const scrollSlider = () => {
    if (!isHovered) {
      const slider = document.querySelector(".slider-container");
      const scrollWidth = slider?.scrollWidth;
      const clientWidth = slider?.clientWidth;

      setScrollPosition((prevPosition) => {
        if (scrollWidth && clientWidth) {
          if (prevPosition >= scrollWidth - clientWidth) {
            return 0;
          }
        }
        return prevPosition + 1;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollSlider, 15);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Fade>
      <HeaderTitle title="What I Offer" />
      <div className="overflow-hidden">
        <div
          className="!w-full slider-container flex gap-y-8 flex-col gap-x-8 rounded-lg mt-4 md:mt-8 md:flex-row"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {whatIOffer.map((item) => (
            <div
              key={item.id}
              className={` w-[99%] px-6 py-4 mx-auto rounded-md cursor-pointer  md:min-w-[350px] md:px-8 md:py-6 ${
                darkMode
                  ? "bg-[#222f30] border border-customGreen hover:border-transparent"
                  : "bg-customLavender border"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div>{item.icon}</div>
              <h1 className="mt-4 text-[14px] md:text-[16px]">{item.title}</h1>
              <h1 className="text-[13px] md:text-[14px] mt-2">{item.desc}</h1>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default WhatIOffer;
