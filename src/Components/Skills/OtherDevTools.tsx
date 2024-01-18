import { otherDevTools } from "../../utils/constants";
import GradientTitle from "../common/GradientTitle";
import SkillsRepresentation from "../common/SkillsRepresentation";

type Props = {};

const OtherDevTools = (props: Props) => {
  return (
    <div>
      <div className="">
        <GradientTitle title="OTHER DEV TOOLS" />
      </div>

      <div>
        <SkillsRepresentation data={otherDevTools} />
      </div>
    </div>
  );
};

export default OtherDevTools;
