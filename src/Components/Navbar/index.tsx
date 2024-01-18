import { ISectionRefs } from "../../interfaces";
import MobileNav from "./MobileNav";
import WebNav from "./WebNav";

const Navbar = ({ navLinks }: ISectionRefs) => {
  return (
    <div>
      <div className="hidden lg:block">
        <WebNav navLinks={navLinks} />
      </div>

      <div className="block lg:hidden">
        <MobileNav navLinks={navLinks} />
      </div>
    </div>
  );
};

export default Navbar;
