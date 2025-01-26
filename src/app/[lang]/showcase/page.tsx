import Container from "@/components/common/container";
import Showcase from "@/components/company/showcase/showcase";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";


const Page: NextPage<LangProps> = async ({params}) => {
  const { lang } = await params;
  return (
    <Container>
      <Showcase lang={lang}/>
    </Container>
  );
};

export default Page;
