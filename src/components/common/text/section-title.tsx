import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const SectionTitle: NextPage<Props> = ({ children }) => {
  return (
    <p className="text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
      {children}
    </p>
  );
};

export default SectionTitle;
