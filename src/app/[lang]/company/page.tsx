import Gallery from "@/components/company/gallery/gallery";
import Header from "@/components/company/header/header";
import Team from "@/components/company/team/team";
import VisionMission from "@/components/company/vision-mission";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";

const Page: NextPage<LangProps> = async ({ params }) => {
  const { lang } = await params;
  return (
    <div className="flex flex-col gap-5">
      <Header lang={lang} />
      <VisionMission lang={lang} />
      <Team lang={lang}/>
      <Gallery lang={lang} />
    </div>
  );
};

export default Page;
