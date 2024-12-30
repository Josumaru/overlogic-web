import { NextPage } from "next";
import Header from "@/components/home/header";
import { LangProps } from "@/types/lang";
import Services from "@/components/home/services/services";

const Page: NextPage<LangProps> = async ({params}) => {
  return (
    <div>
      <Header params={params} />
      <Services params={params} />
    </div>
  );
};

export default Page;
