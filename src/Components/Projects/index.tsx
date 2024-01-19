import { projectsDetails } from "../../utils/constants";
import HeaderTitle from "../common/HeaderTitle";
import ProjectsUI from "./ProjectsUI";

const Projects = () => {
  return (
    <div>
      <div>
        <HeaderTitle title="My Awesome Work" />
      </div>

      <div>
        {projectsDetails.map((item) => {
          return <ProjectsUI {...item} key={item?.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
