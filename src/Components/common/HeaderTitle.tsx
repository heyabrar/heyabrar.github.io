type Props = {
  title: string;
};

const HeaderTitle = ({ title }: Props) => {
  return (
    <div>
      <h1 className="text-[18px] !tracking-[1px] font-semibold text-customGreen font-inter text-center lg:text-[36px]">
        {title}
      </h1>
    </div>
  );
};

export default HeaderTitle;
