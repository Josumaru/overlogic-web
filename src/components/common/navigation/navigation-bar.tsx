import { getDictionary } from "@/app/[lang]/dictionaries";
import { ImageConstants } from "@/constants/ImageConstants";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import OverlogicLogo from "./overlogicLogo";
import { DockIcon, Dock } from "@/components/ui/dock";
import LanguageDropdown from "./languageDropdown";

const NavigationBar: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <nav className="fixed top-0 flex items-center justify-center mx-auto space-x-6 w-full z-50 px-6 py-6 transition-all duration-300">
      {/* Logo */}
      <div className="h-[3rem] flex items-center justify-center px-7 bg-background border border-gray-300 shadow-sm rounded-2xl">
        <OverlogicLogo />
      </div>

      {/* Navigation Links */}
      <Dock className="flex items-center space-x-8 h-[3rem] px-8 bg-background border border-gray-300 shadow-sm rounded-2xl text-sm text-textTitleColor">
        <DockIcon className="hover:text-primary">
          <Link href={"/"}>{dict.home.home}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={"/pricing"}>{dict.pricing.pricing}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary" style={{ minWidth: "auto" }}>
          <Link href={""}>{dict.showCase.showCase}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={""}>{dict.company.company}</Link>
        </DockIcon>
      </Dock>

      {/* Language */}
      <LanguageDropdown/>
    </nav>
  );
};

export default NavigationBar;
