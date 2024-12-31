import { NextPage } from "next";

interface Props {
  children: string;
}

const SectionDesc: NextPage<Props> = ({ children }) => {
  return (
    <p className="w-full my-5 lg:w-1/2 text-textHeadlineColor text-xs sm:text-sm md:text-base">
      {children}
    </p>
  );
};

export default SectionDesc;
