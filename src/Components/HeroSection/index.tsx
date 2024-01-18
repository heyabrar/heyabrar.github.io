import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Fade = require("react-reveal/Fade");

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

const HeroSection = ({ aboutRef }: Props) => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-y-8 !justify-between items-center pt-0 md:flex-row lg:!pt-36">
        <Fade top>
          {/* Hero left section */}
          <div className="w-full">
            <LeftSection aboutRef={aboutRef} />
          </div>
          {/* Hero Right section */}
          <div className="w-full">
            <RightSection />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;
