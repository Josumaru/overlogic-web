import { NextPage } from "next";
import Header from "@/components/home/header/header";
import { LangProps } from "@/types/lang";
import Services from "@/components/home/services/services";
import Testimonials from "@/components/home/testimonials/testimonials";
import Faq from "@/components/home/faq/faq";

const Page: NextPage<LangProps> = async ({ params }) => {
  return (
    <div>
      <Header params={params} />
      <Services params={params} />
      <Testimonials params={params}/>
      <Faq params={params}/>
    </div>
  );
};

export default Page;
