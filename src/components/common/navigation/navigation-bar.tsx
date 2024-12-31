import { getDictionary } from "@/app/[lang]/dictionaries";
import { ImageConstants } from "@/constants/ImageConstants";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import OverlogicLogo from "./overlogicLogo";
import { DockIcon, Dock } from "@/components/ui/dock";

const NavigationBar: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <nav className="fixed top-0 flex items-center justify-center mx-auto space-x-8 w-full z-50 px-6 py-6 transition-all duration-300">
      {/* Logo */}
      <div className="h-[3rem] flex items-center justify-center px-7 bg-background border border-gray-300 shadow-sm rounded-2xl">
        <OverlogicLogo />
      </div>

      {/* Navigation Links */}
      <Dock className="flex items-center space-x-10 h-[3rem] px-7 bg-background border border-gray-300 shadow-sm rounded-2xl text-sm text-textTitleColor">
        <DockIcon className="hover:text-primary">
          <Link href={"/"}>{dict.home.home}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={"/pricing"}>{dict.pricing.pricing}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary" style={{minWidth: "auto"}}>
          <Link href={""}>{dict.showCase.showCase}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={""}>{dict.company.company}</Link>
        </DockIcon>
      </Dock>

      {/* Social Media Links */}
      <Dock className="flex items-center space-x-2 h-[3rem] px-4 bg-background border border-gray-300 shadow-sm rounded-2xl">
        <DockIcon>
          <Link href={"https://www.instagram.com/overlogic.id/"} target="blank">
            <Image className="" src={ImageConstants.logo.instagram} height={20} width={20} alt="instagram-logo" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"https://www.linkedin.com/company/overlogic-id/"} target="blank">
            <Image className="" src={ImageConstants.logo.linkedIn} height={20} width={20} alt="linked-in-logo" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"https://github.com/overlogic-universe"} target="blank">
            <Image className="" src={ImageConstants.logo.github} height={20} width={20} alt="github-logo" />
          </Link>
        </DockIcon>
      </Dock>
    </nav>
  );
};

export default NavigationBar;
