import { Lang } from "@/types/lang";
import { NextPage } from "next";
import Container from "../common/container";
import { getDictionary } from "@/util/dictionaries";
import { MagicCard } from "../ui/magic-card";

const VisionMission: NextPage<Lang> = async ({ lang }) => {
  const dict = (await getDictionary(lang)).company;
  return (
    <Container>
      <div className="grid grid-cols-3 gap-2">
        {dict.visionMission.visionMision.map((visionMission, index) => (
          <MagicCard key={index} className="p-2">
            <p className="text-primary font-semibold">0{index + 1}</p>
            <p className="font-semibold">{visionMission.title}</p>
            <p className="text-muted-foreground">{visionMission.subTitle}</p>
          </MagicCard>
        ))}
      </div>
    </Container>
  );
};

export default VisionMission;
