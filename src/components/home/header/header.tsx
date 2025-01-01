import { NextPage } from "next";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangProps } from "@/types/lang";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { BorderBeam } from "@/components/ui/border-beam";
import InteractiveShimmerButton from "@/components/ui/interactive-shimmer-button";
import Marquee from "@/components/ui/marquee";
import MorphingText from "@/components/ui/morphing-text";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import ProjectImages from "./projectImages";

const teams: Object[] = [
  {
    "UMS IID": ImageConstants.logo.umsIid,
  },
  {
    "Anugerah Powder Coating": ImageConstants.logo.overlogic,
  },
  {
    "Pinleaf Care": ImageConstants.logo.umsIid,
  },
];

const Header: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className=" text-textTitleColor mx-auto w-screen">
      {/* Title */}
      <MorphingText texts={[dict.home.headerTitleFull, dict.home.headerTitleFull2]} />

      {/* Desc */}
      <h2 className="font-normal text-textHeadlineColor mt-[8.2rem] text-center text-[1.5rem] w-3/6 mx-auto space-x-3">
        <span>{dict.home.headerDesc[0]}</span>
        <span className="font-bold">{dict.home.headerDesc[1]}</span>
        <span>{dict.home.headerDesc[2]}</span>
      </h2>

      {/* Button */}
      <div className="flex justify-center items-center w-full mx-auto container mt-12 space-x-5">
        <InteractiveHoverButton text={dict.showCase.showCase} />
        <InteractiveShimmerButton text={dict.home.orderNow} />
      </div>

      {/* Social Media */}
      <Dock className="flex items-center bg-white/20 space-x-4 py-[0.7rem] px-7 border mt-[80px] border-white shadow-sm rounded-2xl">
        <DockIcon>
          <Link href={"https://www.instagram.com/overlogic.id/"} target="blank">
            <Image className="" src={ImageConstants.logo.instagram} height={30} width={30} alt="instagram-logo" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"https://www.linkedin.com/company/overlogic-id/"} target="blank">
            <Image className="" src={ImageConstants.logo.linkedIn} height={30} width={30} alt="linked-in-logo" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"https://github.com/overlogic-universe"} target="blank">
            <Image className="" src={ImageConstants.logo.github} height={30} width={30} alt="github-logo" />
          </Link>
        </DockIcon>
      </Dock>

      {/* Show Case */}
      <div className="pt-[15px] container flex justify-center mx-auto">
        <div className="w-[75%] relative rounded-[2rem] bg-transparent mx-auto">
          <div className="-z-50 absolute container w-full blur-3xl h-[55%] rounded-full bg-gradient-to-l from-secondary via-primary to-secondary animate-sunriseGlow"></div>
          <div
            className="w-full relative rounded-[2rem] bg-transparent mx-auto"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
          >
            <BorderBeam colorFrom="#0000FF" />
            <div className="bg-white/30 h-full w-full absolute rounded-[2rem] border border-white"></div>
            <ProjectImages />
          </div>
        </div>
      </div>

      {/* Trusted By Leading Team */}
      <div className="flex flex-col justify-center items-center mt-[4rem] ">
        <h3 className="font-extrabold text-2xl">{dict.home.trustedByLeadingTeam}</h3>
        <div className="container w-[65%] relative h-[4rem] mt-8 flex flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:100s]">
            {teams.map((data, index) => {
              const [logo] = Object.values(data);
              return <Image key={index} src={logo} alt={`${Object.keys(data)[index]}`} width={200} height={1000} className="mx-4 aspect-auto object-contain" />;
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div
              className="absolute bottom-0 h-[5rem] left-0 right-0 bg-background pointer-events-none"
              // style={{
              //   maskImage: "linear-gradient(to top, black 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)",
              //   WebkitMaskImage: "linear-gradient(to top, black 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)",
              // }}
            ></div> */
}
