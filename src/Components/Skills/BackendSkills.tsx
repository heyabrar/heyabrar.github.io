import { backEndSkills } from "../../utils/constants";
import GradientTitle from "../common/GradientTitle";
import SkillsRepresentation from "../common/SkillsRepresentation";

const BackendSkills = () => {
  return (
    <div>
      <div>
        <GradientTitle title="BACKEND" />
      </div>

      <div>
        <SkillsRepresentation data={backEndSkills} />
      </div>
    </div>
  );
};

export default BackendSkills;
