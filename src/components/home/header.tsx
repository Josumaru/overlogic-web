import { NextPage } from "next";
import MorphingText from "../ui/morphing-text";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangProps } from "@/types/lang";
import BlurAnimation from "./blurAnimation";
import { BorderBeam } from "../ui/border-beam";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

const Header: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="text-textTitleColor mx-auto w-screen">
      <MorphingText texts={[dict.home.headerTitleFull, dict.home.headerTitleFull2]} />
      <h1 className="font-normal text-textHeadlineColor mt-[110px] text-center text-[1.5rem] w-3/6 mx-auto space-x-3">
        <span>{dict.home.headerDesc[0]}</span>
        <span className="font-bold">{dict.home.headerDesc[1]}</span>
        <span>{dict.home.headerDesc[2]}</span>
      </h1>
      <div className="absolute">
        <BlurAnimation />
        <div className="relative w-4/5 px-3rem rounded-xl mt-[120px] bg-transparent container mx-auto">
          <BorderBeam />
          <div className="bg-gray-200 h-full w-full absolute rounded-xl opacity-40  border-2 border-white"></div>
          <div className="h-full w-full rounded-xl relative p-3">
            <Image className="h-full w-full rounded-xl" src={ImageConstants.project.umsiid} alt="ums iid" width={3000} height={3000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <h1 className="flex flex-col md:flex-row items-center justify-center  space-y-4 md:space-y-0 space-x-4">
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
      </h1> */
}
