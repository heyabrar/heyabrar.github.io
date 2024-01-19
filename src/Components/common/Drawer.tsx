import React from "react";
import { MdCancel } from "react-icons/md";
import AK from "../../assets/Icons/AK";
import useStore from "../../store";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ children, isOpen, setIsOpen }: Props) => {
  const { darkMode } = useStore();
  return (
    <main
      className={`fixed overflow-hidden z-50 bg-gray-850 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0"
          : " transition-opacity delay-500 opacity-0 translate-y-full"
      }`}
    >
      <section
        className={`w-screen bg-black top-0 absolute h-fit shadow-xl delay-400 duration-500 ease-in-out transition-all transform lg:rounded-xl ${
          darkMode ? "bg-black" : "bg-customLavender"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <AK />
          <MdCancel
            onClick={() => setIsOpen(false)}
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>
        <div>{children}</div>
      </section>

      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </main>
  );
};

export default Drawer;
