import { NextPage } from "next";

const GradientBorderSeparator: NextPage = ({}) => {
  return (
    <div
      className="container relative h-[2px] bg-white w-full lg:w-[100%] opacity-20"
      style={{
        clipPath:
          "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
      }}
    />
  );
};

export default GradientBorderSeparator;
