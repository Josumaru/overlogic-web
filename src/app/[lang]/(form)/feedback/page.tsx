import Feedback from "@/components/form/feedback";
import { LangProps } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { NextPage } from "next";

const Page: NextPage<LangProps> = async ({ params }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Feedback dict={dict} />;
};

export default Page;
