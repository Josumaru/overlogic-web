import Container from "@/components/common/container";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/util/dictionaries";
import { NextPage } from "next";
import TeamCarousel from "./team-carousel";

const Team: NextPage<Lang> = async ({ lang }) => {
  const dict = (await getDictionary(lang)).company;
  return (
    <Container>
      <div className="flex justify-end flex-col">
        <SectionTitle
          text={dict.team.title}
          coloredText={["Overlogic", "Bisnis", "Business", "Kenali", "Meet"]}
        />
        <SectionDesc>{dict.team.subTitle}</SectionDesc>
      </div>
      {/* Team */}
      <TeamCarousel />
    </Container>
  );
};

export default Team;
