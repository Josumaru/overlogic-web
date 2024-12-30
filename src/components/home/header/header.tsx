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

      {/* Show Case */}
      <div className="pt-[80px] container flex justify-center mx-auto">
        <div className="w-[85%] relative rounded-[2rem] bg-transparent mx-auto">
          <BorderBeam colorFrom="#0000FF" />
          <div className="-z-50 absolute container w-full blur-3xl h-[70%] rounded-full bg-gradient-to-l from-secondary via-primary to-secondary animate-sunriseGlow"></div>
          <div className="bg-transparent h-full w-full absolute rounded-[2rem] border border-white"></div>
          <div className="bg-white h-full w-full absolute rounded-[2rem] opacity-40"></div>
          <div className="h-full w-full rounded-[1.5rem] relative p-[0.6rem]">
            <Image className="h-full w-full rounded-[1.5rem]" src={ImageConstants.project.umsiid} alt="ums iid" width={3000} height={3000} />
          </div>
          <div
            className="absolute bottom-0 h-[5rem] left-0 right-0 bg-background pointer-events-none"
            style={{
              maskImage: "linear-gradient(to top, black 40%, transparent)",
              WebkitMaskImage: "linear-gradient(to top, black 40%, transparent)",
            }}
          ></div>{" "}
        </div>
      </div>

      {/* Trusted By Leading Team */}
      <div className="flex flex-col justify-center items-center mt-[4rem]">
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
  //   <NeonGradientCard
  //   borderSize={0}
  //   neonColors={{
  //     firstColor: "#316DF9",
  //     secondColor: "#31F9D4",
  //   }}
  //   className="bg-transparent h-full w-full absolute rounded-[2rem] border border-white"
  // ></NeonGradientCard>
}
