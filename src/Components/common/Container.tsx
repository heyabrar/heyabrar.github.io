import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="px-6 max-w-[1248px] xl:!mx-auto">{children}</div>;
};

export default Container;
