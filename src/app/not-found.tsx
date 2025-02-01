import NotFound from "@/components/common/not-found";
import { NextPage } from "next";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default Page;
