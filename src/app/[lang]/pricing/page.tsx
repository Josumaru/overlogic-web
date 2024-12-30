import { NextPage } from "next";
import { Lang } from "@/types/lang";
import Pricing from "@/components/pricing/pricing";

interface Props {
  params: Promise<Lang>;
}

const Page: NextPage<Props> = async ({ params }) => {
  return (
    <div className="flex items-center justify-center">
      <Pricing params={params} />
    </div>
  );
};

export default Page;
