import { getDictionary } from "@/app/[lang]/dictionaries";
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
const faqData: FaqItem[] = faqDict.faqData

  return (
    <div className="flex items-center justify-center px-3 md:px-10 mt-[5rem]">
      <div className="container">
        <SectionTitle>
          {faqDict.title[0]} <span className="text-primary">{faqDict.title[1]}</span> {faqDict.title[2]}{" "}
          <br className="hidden md:block" />
          <span className="text-primary">{faqDict.title[3]} </span>
        </SectionTitle>
        <SectionDesc>{faqDict.subTitle}</SectionDesc>

        {/* Menyisipkan FaqList */}
        <FaqList faqData={faqData} />
      </div>
    </div>
  );
};

export default Faq;
