import { getDictionary } from "@/app/[lang]/dictionaries";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Link from "next/link";
import { buildLangUrl } from "@/util/buildLangUrl";
import OverlogicLogo from "./overlogicLogo";
import { DockIcon, Dock } from "@/components/ui/dock";
import LanguageDropdown from "./languageDropdown";
import MenuBox from "./menuBox";

const NavigationBar: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <nav className="fixed top-0 flex items-center md:justify-center justify-between mx-auto space-x-6 w-full z-50 px-6 py-6 transition-all duration-300">
      {/* Logo */}
      <div className="h-[3rem] flex items-center justify-center px-7 bg-background border border-gray-300 shadow-sm rounded-2xl">
        <OverlogicLogo />
      </div>

      {/* Navigation Links */}
      <Dock className="md:flex hidden items-center space-x-8 h-[3rem] px-8 bg-background border border-gray-300 shadow-sm rounded-2xl text-sm text-textTitleColor">
        <DockIcon className="hover:text-primary">
          <Link href={buildLangUrl("/", lang)}>{dict.home.home}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={buildLangUrl("/pricing", lang)}>{dict.pricing.pricing}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary" style={{ minWidth: "auto" }}>
          <Link href={buildLangUrl("/", lang)}>{dict.showCase.showCase}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary">
          <Link href={buildLangUrl("/", lang)}>{dict.company.company}</Link>
        </DockIcon>
      </Dock>

      <div className="flex space-x-3">
        {/* Language */}
        <LanguageDropdown />

        {/* Menu Box */}
        <MenuBox dict={dict} lang={lang} />
      </div>
    </nav>
  );
};

export default NavigationBar;
