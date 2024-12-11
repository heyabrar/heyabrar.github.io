import { otherDevTools } from "../../utils/constants";
import GradientTitle from "../common/GradientTitle";
import SkillsRepresentation from "../common/SkillsRepresentation";

const OtherDevTools = () => {
  return (
    <div>
      <div>
        <GradientTitle title="OTHER TOOLS" />
      </div>

      <div>
        <SkillsRepresentation data={otherDevTools} />
      </div>
    </div>
  );
};

export default OtherDevTools;
