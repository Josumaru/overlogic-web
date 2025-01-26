"use client";
import { useState } from "react";
import { NextPage } from "next";
import { buildLangUrl } from "@/util/buildLangUrl";
import Link from "next/link";

interface MenuBoxProps {
  lang: string;
  dict: any;
}

const MenuBox: NextPage<MenuBoxProps> = ({ lang, dict }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [languageExpand, setLanguageExpand] = useState(false);

  // const handleLanguageChange = (language: string) => {
  //   const newUrl = buildLangUrl("/", language);
  //   window.location.href = newUrl;
  // };

  return (
    <div className="md:hidden block">
      {/* Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-center w-[3rem] h-[3rem] shadow-sm border bg-background border-zinc-300 dark:border-zinc-800 rounded-2xl"
      >
        {menuOpen ? (
          /* Close (X) Icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="text-title-color"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          /* Hamburger Icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="text-title-color"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menu Box */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 mt-2 w-[90%] rounded-xl bg-background shadow-sm border border-zinc-300 dark:border-zinc-800 px-6 py-4 z-40 transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Navbar List */}
        <ul className="space-y-4 flex flex-col items-center justify-center text-sm text-text-title-color">
          <li className="hover:text-primary">
            <Link href={buildLangUrl("/", lang)}>{dict.home.home}</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={buildLangUrl("/pricing", lang)}>{dict.pricing.pricing}</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={buildLangUrl("/showcase", lang)}>{dict.showcase.showcase}</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={buildLangUrl("/company", lang)}>{dict.company.company}</Link>
          </li>
        </ul>

        {/* Language Selector */}
        {/* <div className="mt-4">
          <button
            className="flex items-center justify-center w-full"
            onClick={() => setLanguageExpand(!languageExpand)}
          >
            <span>{lang === "en" ? "English" : "Indonesian"}</span>
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
                languageExpand ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}

          {/* Language Expand Section */}
          {/* <div
            className={`overflow-hidden transition-all duration-500 ${
              languageExpand ? "max-h-[100px]" : "max-h-0"
            }`}
          >
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleLanguageChange("en")}
            >
              English
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleLanguageChange("id")}
            >
              Indonesian
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MenuBox;
