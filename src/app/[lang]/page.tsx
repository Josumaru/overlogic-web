import { NextPage } from "next";
import { getDictionary } from "./dictionaries";
import { Lang } from "@/types/lang";
import Link from "next/link";

interface Props {
  params: Promise<Lang>;
}

const Page: NextPage<Props> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div>
      {dict.home.home}
      <Link href={lang == "id" ? "/en" : "/id"}> switch</Link>
    </div>
  );
};

export default Page;
