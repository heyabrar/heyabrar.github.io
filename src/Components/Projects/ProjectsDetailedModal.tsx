import CustomModal from "../common/CustomDialog";
import useStore from "../../store";

type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
};

const ProjectsDetailedModal = ({ openModal, handleCloseModal }: Props) => {
  const { projectData } = useStore();
  return (
    <div>
      <CustomModal
        title={projectData?.title || ""}
        open={openModal}
        handleCloseModal={handleCloseModal}
        className="hidden md:w-[50%] lg:block bg-customGreen text-white max-h-[400px] overflow-y-scroll hideScroll"
      >
        <h1 className="leading-[25px] text-[16px] mt-2">{projectData?.description}</h1>
        <h1 className="leading-[25px] text-[16px] mt-2">{projectData?.description1}</h1>
        <h1 className="leading-[25px] text-[16px] mt-2">{projectData?.description2}</h1>
      </CustomModal>
    </div>
  );
};

export default ProjectsDetailedModal;
