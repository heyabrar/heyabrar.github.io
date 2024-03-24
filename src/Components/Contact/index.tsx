import {
  contactEmail,
  contactNumber,
  githubURL,
  linkedInURL,
} from "../../utils/constants";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { IoMailOpen } from "react-icons/io5";
import AK from "../../assets/Icons/AK";
import useStore from "../../store";
const Fade = require("react-reveal/Fade");

const Contact = () => {
  const { darkMode } = useStore();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const phoneNumber = "8217361455";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    if (typeof window !== "undefined") window.location.href = whatsappUrl;
  };

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
          <button
            className="flex gap-x-2 items-center"
            onClick={handleWhatsAppClick}
          >
            <BsWhatsapp />
            <h1 className="text-[14px]">{contactNumber}</h1>
          </button>
          <a
            href="mailTo:heyabrarkhan@gmail.com"
            target="_blank"
            className="!text-[14px] flex items-center gap-x-2"
            rel="noreferrer"
          >
            <IoMailOpen />
            {contactEmail}
          </a>
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
          <button
            className="flex gap-x-1 items-center"
            onClick={handleWhatsAppClick}
          >
            <BsWhatsapp className="text-[12px]" />
            <h1 className="text-[12px]">{contactNumber}</h1>
          </button>
          <a
            href="mailTo:heyabrarkhan@gmail.com"
            target="_blank"
            className="!text-[12px] flex items-center gap-x-2"
            rel="noreferrer"
          >
            <IoMailOpen />
            {contactEmail}
          </a>
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
