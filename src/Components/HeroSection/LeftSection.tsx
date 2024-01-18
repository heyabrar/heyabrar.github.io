import useStore from "../../store";
import { handleScrollTo } from "../../utils/helper/helperFunctions";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

const LeftSection = ({ aboutRef }: Props) => {
  const { darkMode } = useStore();
  return (
    <div className="text-center">
      <div className="flex gap-x-1 w-fit mx-auto">
        <h1 className="text-[22px] font-inter font-bold lg:text-4xl ">
          Hello World, I'm <span className="text-customGreen">Abrar Khan</span>
        </h1>
      </div>
      <h1 className="text-[16px] mt-2 font-inter font-normal lg:mt-6 lg:text-[20px]">
        Software Developer from Bengaluru
      </h1>
      <button
        onClick={() => {
          handleScrollTo(aboutRef);
        }}
        className={`border text-[12px] rounded-md px-4 py-2 mt-4 lg:!rounded-[8px] lg:text-[14px] lg:mt-8 ${
          darkMode ? "border-white" : "border-black"
        }`}
      >
        Know More
      </button>
    </div>
  );
};

export default LeftSection;
