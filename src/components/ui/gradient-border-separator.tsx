import { NextPage } from "next";

const GradientBorderSeparator: NextPage = ({}) => {
  return (
    <div
      className="relative h-[1px] bg-gradient-to-r from-secondary via-primary to-secondary w-full lg:w-[80%]"
      style={{
        clipPath:
          "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
      }}
    />
  );
};

export default GradientBorderSeparator;
