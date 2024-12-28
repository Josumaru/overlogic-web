import { NextPage } from "next";
import Header from "@/components/home/header";
import { LangProps } from "@/types/lang";

const Page: NextPage<LangProps> = async ({params}) => {
  return (
    <div>
      <Header params={params} />
    </div>
  );
};

export default Page;
