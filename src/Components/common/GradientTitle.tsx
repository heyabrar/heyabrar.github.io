import useStore from "../../store";

type Props = {
  title: string;
};

const GradientTitle = ({ title }: Props) => {
  const { darkMode } = useStore();
  return (
    <div>
      <h1
        className={`text-[12px] tracking-widest text-center mx-auto p-2 bg-gradient-to-r  md:w-[45%] lg:text-[14px] lg:w-[30%] ${
          darkMode
            ? "from-black via-customGreen via-40% to-black to-100%"
            : "from-customLavender via-blue-100 via-40% to-customLavender to-100%"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default GradientTitle;
