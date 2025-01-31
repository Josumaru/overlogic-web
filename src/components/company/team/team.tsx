import Container from "@/components/common/container";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { NextPage } from "next";
import TeamCarousel from "./team-carousel";
import { TeamConstants } from "@/constants/TeamConstants";

const Team: NextPage<Lang> = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const members = await TeamConstants({ lang: lang });

  return (
    <Container>
      <div className="flex justify-end flex-col">
        <SectionTitle
          text={dict.company.team.title}
          coloredText={["Overlogic", "Bisnis", "Business", "Kenali", "Meet"]}
        />
        <SectionDesc>{dict.company.team.subTitle}</SectionDesc>
      </div>
      {/* Team */}
      <TeamCarousel members={members} />
    </Container>
  );
};

export default Team;
