import { frontEndSkills } from "../../utils/constants";
import GradientTitle from "../common/GradientTitle";
import SkillsRepresentation from "../common/SkillsRepresentation";

const FrontEndSkills = () => {
  return (
    <div>
      <div>
        <GradientTitle title="FRONTEND" />
      </div>

      <div>
        <SkillsRepresentation data={frontEndSkills} />
      </div>
    </div>
  );
};

export default FrontEndSkills;
