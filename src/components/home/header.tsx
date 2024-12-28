import { NextPage } from "next";
import MorphingText from "../ui/morphing-text";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangProps } from "@/types/lang";
import { div } from "framer-motion/client";
import BlurAnimation from "./blurAnimation";

const Header: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="absolute w-screen">
      <BlurAnimation />
      <div className="container text-textTitleColor mx-auto w-screen">
        {/* <h1 className="flex flex-col md:flex-row items-center justify-center  space-y-4 md:space-y-0 space-x-4">
        <span className="h-16 text-center font-sans text-[30pt] font-bold leading-none md:h-24 lg:text-[4.5rem]">{dict.home.headerTitle[0]}</span>
        <span className="flex items-center">
          <MorphingText texts={[dict.home.headerTitle[1], dict.home.headerTitle2[1]]} />
        </span>
      </h1>
      <h1 className="flex flex-col md:flex-row items-center justify-center">
        <span className="flex items-center">
          <MorphingText texts={[`${dict.home.headerTitle[2]}  `, dict.home.headerTitle2[2]]} />
        </span>{"  "}
        <span className="h-16 text-center font-sans text-[30pt] font-bold leading-none md:h-24 lg:text-[4.5rem]">{dict.home.headerTitle[3]}</span>
      </h1> */}
        <MorphingText texts={[dict.home.headerTitleFull, dict.home.headerTitleFull2]} />
        <h1 className="font-normal text-textHeadlineColor mt-[75px] text-center text-[1.8rem] w-3/5 mx-auto space-x-3">
          <span>{dict.home.headerDesc[0]}</span>
          <span className="font-bold">{dict.home.headerDesc[1]}</span>
          <span>{dict.home.headerDesc[2]}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
