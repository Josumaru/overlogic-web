import { ShowcaseConstants } from "@/constants/ShowcaseConstants";
import { Lang } from "@/types/lang";
import { NextPage } from "next";
import ShowcaseCard from "./showcase-card";
import SectionTitle from "@/components/common/text/section-title";
import SectionDesc from "@/components/common/text/section-desc";
import { getDictionary } from "@/utils/dictionaries";

const Showcase: NextPage<Lang> = async ({ lang }) => {
  const showcases = await ShowcaseConstants({ lang: lang });
  const dict = (await getDictionary(lang)).showcase;
  return (
    <section>
      <div className="mt-28">
        <SectionTitle
          text={dict.title}
          coloredText={["Digitalization", "Cerdas", "Digitalisasi", "Smart"]}
        />
        <SectionDesc>{dict.subTitle}</SectionDesc>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {showcases.map((showcase, index) => (
          <ShowcaseCard index={index} key={index} showcase={showcase} seeMore={dict.common.seeMore}/>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
