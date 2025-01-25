"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ImageConstants } from "@/constants/ImageConstants";
import { useRouter, usePathname } from "next/navigation";

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const lang = pathname.split("/")[1];
    if (lang === "en") {
      setCurrentLang("EN");
    } else if (lang === "id") {
      setCurrentLang("ID");
    }
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    const pathSegments = pathname.split("/");
    pathSegments[1] = lang.toLowerCase();
    router.push(pathSegments.join("/"));
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative text-textTitleColor flex items-center h-[3rem] px-1 bg-background border border-gray-300 shadow-sm rounded-2xl">
      {/* Trigger Dropdown */}
      <div className="flex items-center justify-center px-3 py-2 rounded-xl space-x-1 hover:cursor-pointer hover:bg-gray-100" onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={ImageConstants.icon.language} height={20} width={20} alt="lang-icon" />
        <p className="text-sm">{currentLang}</p>
        <ChevronDownIcon />
      </div>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute top-full text-sm right-0 mt-2 w-[8rem] bg-background shadow-md border border-gray-300 rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {/* Select Language */}
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:rounded-t-md" onClick={() => changeLanguage("EN")}>
          English
        </button>
        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:rounded-b-md" onClick={() => changeLanguage("ID")}>
          Bahasa Indonesia
        </button>
      </div>
    </div>
  );
};

export default ThemeDropdown;
