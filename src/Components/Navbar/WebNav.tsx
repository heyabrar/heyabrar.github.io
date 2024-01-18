import AK from "../Icons/AK";
import { ISectionRefs } from "../../interfaces";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import useStore from "../../store";

const WebNav = ({ navLinks }: ISectionRefs) => {
  const { darkMode, setDarkMode } = useStore();

  return (
    <div
      className={`flex justify-between !px-20 py-6 items-center fixed w-full z-40 xl:!px-32 ${
        darkMode ? " bg-black" : "bg-customLavender"
      }`}
    >
      <div>
        <AK className={`${darkMode ? "text-white" : "text-black"}`} />
      </div>
      <div className="flex gap-x-12">
        {navLinks.map((item: any) => {
          return (
            <ul key={item?._id}>
              <li
                className="font-semibold text-sm cursor-pointer"
                onClick={item.onClick}
              >
                {item?.title}
              </li>
            </ul>
          );
        })}

        {!darkMode ? (
          <MdOutlineDarkMode
            onClick={() => setDarkMode(true)}
            className="cursor-pointer"
          />
        ) : (
          <MdOutlineLightMode
            onClick={() => setDarkMode(false)}
            className="cursor-pointer hover:animate-spin"
          />
        )}
      </div>
    </div>
  );
};

export default WebNav;
