import { getDictionary } from "@/utils/dictionaries";
import { Lang } from "@/types/lang";
import { NextPage } from "next";
import Link from "next/link";
import { buildLangUrl } from "@/utils/buildLangUrl";
import OverlogicLogo from "./overlogicLogo";
import { DockIcon, Dock } from "@/components/ui/dock";
import PreferecesDropdown from "./preferences-dropdown";
import MenuBox from "./menuBox";

const NavigationBar: NextPage<Lang> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <nav className="fixed top-0 flex items-center md:justify-center justify-between mx-auto space-x-6 w-full z-50 px-6 py-6 transition-all duration-300">
      {/* Logo */}
      <div className="mx-0 px-2 md:px-7 h-[3rem] flex items-center justify-center bg-background border shadow-sm rounded-2xl">
        <OverlogicLogo />
      </div>

      {/* Navigation Links */}
      <Dock className="md:flex hidden items-center space-x-8 h-[3rem] px-8 bg-background border shadow-sm rounded-2xl text-sm text-text-title-color">
        <DockIcon className="hover:text-primary dark:text-gray-300">
          <Link href={buildLangUrl("/", lang)}>{dict.home.home}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary dark:text-gray-300">
          <Link href={buildLangUrl("/pricing", lang)}>{dict.pricing.pricing}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary dark:text-gray-300" style={{ minWidth: "auto" }}>
          <Link href={buildLangUrl("/showcase", lang)}>{dict.showcase.showcase}</Link>
        </DockIcon>
        <DockIcon className="hover:text-primary dark:text-gray-300">
          <Link href={buildLangUrl("/company", lang)}>{dict.company.company}</Link>
        </DockIcon>
      </Dock>

      <div className="flex space-x-3">
        {/* Language */}
        <PreferecesDropdown />

        {/* Menu Box */}
        <MenuBox dict={dict} lang={lang} />
      </div>
      
    </nav>
  );
};

export default NavigationBar;
