import HeaderTitle from "../common/HeaderTitle";
import FrontEndSkills from "./FrontEndSkills";
import BackendSkills from "./BackendSkills";
import OtherDevTools from "./OtherDevTools";
import VersionControls from "./VersionControls";

const Fade = require("react-reveal/Fade");

const Skills = () => {
  return (
    <div>
      <div>
        <HeaderTitle title="My Expertise" />
      </div>

      <div className="mt-4">
        <Fade bottom>
          <FrontEndSkills />
        </Fade>
      </div>

      <div className="mt-20">
        <Fade bottom>
          <BackendSkills />
        </Fade>
      </div>

      <div className="mt-20">
        <Fade bottom>
          <OtherDevTools />
        </Fade>
      </div>

      <div className="mt-20">
        <Fade bottom>
          <VersionControls />
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
