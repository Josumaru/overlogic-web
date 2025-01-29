import { getDictionary } from "@/utils/dictionaries";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";
import FaqList from "./faqList";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";

export interface FaqItem {
  question: string;
  answer: string;
}

const Faq: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  const faqDict = dict.home.faq;
  const faqData: FaqItem[] = faqDict.faqData;

  return (
    <div className="flex items-center justify-center px-3 md:px-10 mt-[5rem]">
      <div className="container">
        <SectionTitle text={faqDict.title} coloredText={["Discover", "logic", "Asked", "Temukan", "logika", "Diajukan"]} />
        <SectionDesc>{faqDict.subTitle}</SectionDesc>

        {/* Faq List */}
        <FaqList faqData={faqData} />
      </div>
    </div>
  );
};

export default Faq;
