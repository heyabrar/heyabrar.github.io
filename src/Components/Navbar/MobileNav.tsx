import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ISectionRefs } from "../../interfaces";
import AK from "../../assets/Icons/AK";
import Drawer from "../common/Drawer";
import useStore from "../../store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const MobileNav = ({ navLinks }: ISectionRefs) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { darkMode, setDarkMode } = useStore();
  return (
    <div>
      <div
        className={`flex shadow-sm justify-between items-center px-6 py-5 fixed w-full z-40 ${
          darkMode
            ? "bg-black text-gray-200 "
            : "bg-customLavender text-gray-700"
        }`}
      >
        <AK />
        <div className="flex items-center gap-x-4">
          {!darkMode ? (
            <MdOutlineDarkMode
              onClick={() => setDarkMode(true)}
              className="cursor-pointer w-[20px] h-[20px] "
            />
          ) : (
            <MdOutlineLightMode
              onClick={() => setDarkMode(false)}
              className="cursor-pointer w-[20px] h-[20px] "
            />
          )}
          <GiHamburgerMenu
            className="cursor-pointer w-[25px] h-[25px] "
            onClick={() => setOpenDrawer(true)}
          />
        </div>
      </div>

      <div className="large:hidden">
        <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer}>
          <div
            className={`${
              darkMode ? "bg-black" : "bg-customLavender text-gray-700"
            } px-4 py-4`}
          >
            {navLinks?.map((item: any) => {
              return (
                <ul key={item?._id}>
                  <li
                    className="py-3 font-sans text-xs font-bold cursor-pointer"
                    onClick={() => {
                      item?.onClick();
                      setOpenDrawer(false);
                    }}
                  >
                    {item?.title}
                  </li>
                </ul>
              );
            })}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileNav;
