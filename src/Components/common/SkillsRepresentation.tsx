type Props = {
  data: { id: number; title: string; image: string }[];
};

const SkillsRepresentation = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mt-8 lg:gap-y-20 ">
      {data.map((item) => {
        return (
          <div key={item?.id} className="">
            <div className="h-[50px] lg:h-[75px] flex items-center justify-center">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-[40px] lg:w-[65px] mx-auto"
              />
            </div>
            <h1 className="text-center text-[12px] font-medium mt-2 lg:text-[14px]">
              {item?.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsRepresentation;
