import { getDictionary } from "@/app/[lang]/dictionaries";
import { ImageConstants } from "@/constants/ImageConstants";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import OverlogicLogo from "./overlogicLogo";

const NavigationBar: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <nav className="fixed top-0 flex items-center justify-center mx-auto space-x-8 w-full z-50 px-6 py-4 transition-all duration-300">
      {/* Logo */}
     <OverlogicLogo/>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-10 py-[0.7rem] px-7 bg-background border border-gray-300 shadow-sm rounded-2xl text-sm text-textTitleColor">
        <li>
          <Link href={"/"}>{dict.home.home}</Link>
        </li>
        <li>
          <Link href={"/pricing"}>{dict.pricing.pricing}</Link>
        </li>
        <li>
          <Link href={""}>{dict.showCase.showCase}</Link>
        </li>
        <li>
          <Link href={""}>{dict.company.company}</Link>
        </li>
      </ul>

      {/* Social Media Links */}
      <ul className="flex items-center space-x-8 py-[0.7rem] px-7 bg-background border border-gray-300 shadow-sm rounded-2xl">
        <li>
          <Link href={"https://www.instagram.com/overlogic.id/"} target="blank">
            <Image
              className=""
              src={ImageConstants.logo.instagram}
              height={20}
              width={20}
              alt="instagram-logo"
            />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/company/overlogic-id/"} target="blank">
            <Image
              className=""
              src={ImageConstants.logo.linkedIn}
              height={20}
              width={20}
              alt="linked-in-logo"
            />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/overlogic-universe"} target="blank">
            <Image
              className=""
              src={ImageConstants.logo.github}
              height={20}
              width={20}
              alt="github-logo"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
