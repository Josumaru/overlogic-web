"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Languages, Moon, Sun } from "lucide-react";
import { Dock } from "@/components/ui/dock";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPreference, setCurrentPreference] = useState<string>("SYSTEM");
  const [currentLang, setCurrentLang] = useState("EN");
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setTheme, theme } = useTheme();

  const preferences = [
    {
      type: "lang",
      prefs: [
        {
          name: "Bahasa Indonesia",
          value: "ID",
        },
        {
          name: "English",
          value: "EN",
        },
      ],
    },
    {
      type: "theme",
      prefs: [
        {
          name: "System",
          value: "system",
        },
        {
          name: "Light",
          value: "light",
        },
        {
          name: "Dark",
          value: "dark",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    <Dock className="relative text-textTitleColor flex items-center h-[3rem] px-1 bg-background border mx-0 shadow-sm rounded-2xl dark:text-gray-300">
      {/* Trigger Dropdown */}
      <div className="flex items-center justify-center">
        {preferences.map((preference, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-3 py-2 rounded-xl space-x-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setCurrentPreference(preference.type);
            }}
          >
            {preference.type == "lang" ? (
              <Languages className="h-4 w-4" />
            ) : (
              <Fragment>
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="h-4 w-4 dark:block hidden" />
              </Fragment>
            )}
            <p className="text-sm">
              {preference.type == "lang" ? currentLang : theme?.toUpperCase()}
            </p>
            <ChevronDownIcon />
          </div>
        ))}
      </div>

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute top-full text-sm right-0 mt-2 w-full bg-background shadow-md border border-gray-300  dark:border-zinc-800 rounded-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Select Preferences */}
        {currentPreference == "lang"
          ? preferences[0].prefs.map((pref, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-l hover:rounded-t-md"
                onClick={() => changeLanguage(pref.value)}
              >
                {pref.name}
              </button>
            ))
          : preferences[1].prefs.map((pref, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-l hover:rounded-t-md"
                onClick={() => setTheme(pref.value)}
              >
                {pref.name}
              </button>
            ))}
      </div>
    </Dock>
  );
};

export default LanguageDropdown;
