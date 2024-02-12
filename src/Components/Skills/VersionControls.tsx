import { versionControl } from "../../utils/constants";
import GradientTitle from "../common/GradientTitle";

const VersionControls = () => {
  return (
    <div>
      <div>
        <GradientTitle title="VERSION CONTROLS" />
      </div>

      <div className="flex gap-x-20 justify-center mt-6 lg:gap-x-60 ">
        {versionControl?.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item?.image}
                alt={item?.title}
                className="w-[40px] h-[40px] lg:w-[65px] lg:h-[60px] mx-auto"
              />
              <h1 className="text-center text-[12px] font-medium   mt-2 lg:text-[14px]">
                {item?.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VersionControls;
