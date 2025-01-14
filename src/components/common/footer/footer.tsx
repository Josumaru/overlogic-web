import { ImageConstants } from "@/constants/ImageConstants";
import { Lang, LangProps } from "@/types/lang";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import OverlogicLogo from "../navigation/overlogicLogo";
import { Sun } from "lucide-react";
import GradientBorderSeparator from "@/components/ui/gradient-border-separator";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Status from "./status";

const Footer: NextPage<LangProps> = async ({ params }) => {
  const { lang } = await params;
  const dict = (await getDictionary(lang)).common.footer;
  const links = dict.links
  const right = dict.right

  return (
    <div className="w-full flex bg-indigo-50 items-center justify-center flex-col mt-20 px-3 md:px-10">
      <GradientBorderSeparator />
      <div className="flex container items-center w-full md:justify-center py-10 mt-2">
        <div className="flex flex-col justify-between w-full md:flex-row">
          <div className="md:w-1/3">
            <OverlogicLogo />
            <div className="flex gap-2 h-10">
              <Status params={params} dict={dict.status}/>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row w-full justify-between">
            {links.map((link, index) => {
              return (
                <div key={index} className="w-full mb-5 md:w-1/4 flex flex-col">
                  <p className="font-medium">{link.title}</p>
                  {link.subtitles.map((subtitle, index) => (
                    <Link
                      target="_blank"
                      href={subtitle.url}
                      key={index}
                      className="mt-1 hover:pl-1 cursor-pointer hover:text-primary text-muted-foreground duration-150"
                    >
                      {subtitle.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GradientBorderSeparator />
      <div className="flex items-center w-full justify-center gap-4  py-5">
        <div className="w-full flex items-center justify-between container">
          <p className="text-muted-foreground flex items-center justify-center">
            © 2025 Overlogic Universe.
            <span className="hidden lg:block ml-2">{right}.</span>
          </p>
          <p className="text-muted-foreground flex items-center justify-center">
            <span>
              <Sun />
            </span>
          </p>
          {/* <ThemeChangerButton /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
