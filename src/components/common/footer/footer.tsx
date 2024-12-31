import { ImageConstants } from "@/constants/ImageConstants";
import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import OverlogicLogo from "../navigation/overlogicLogo";
import { Sun } from "lucide-react";

const Footer: NextPage<LangProps> = ({ params }) => {
  const links = [
    {
      title: "Service",
      subtitles: [
        {
          name: "Website Developtment",
          url: "",
        },
        {
          name: "Android Developtment",
          url: "",
        },
        {
          name: "Backend Developtment",
          url: "",
        },
      ],
    },
    {
      title: "Product",
      subtitles: [
        {
          name: "UMS IID",
          url: "https://ums-iid.com/",
        },
        {
          name: "Anugerah",
          url: "https://anugerahpowdercoating.com/",
        },
        {
          name: "Pineleaf",
          url: "https://pineleaf.id/",
        },
      ],
    },
    {
      title: "Overlogic",
      subtitles: [
        {
          name: "Websites",
          url: "https://overlogic.id",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/overlogic.id/",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/overlogic",
        },
        { name: "Discord", url: "https://discord.com/app" },
      ],
    },
    {
      title: "Domain",
      subtitles: [
        {
          name: "overlogic.io",
          url: "https://overlogic.io",
        },
        {
          name: "status.overlogic.io",
          url: "https://stats.overlogic.io",
        },
        {
          name: "airi.overlogic.io",
          url: "https://airi.overlogic.io",
        },
      ],
    },
  ];
  return (
    <div className="w-full flex items-center justify-center flex-col mt-20">
      <div className="container [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-blue-500/70 w-full" />
      <div className="flex container items-center w-full md:justify-center py-10 mt-2 px-3 md:px-10">
        <div className="flex flex-col justify-between w-full md:flex-row">
          <div className="md:w-1/3">
            <OverlogicLogo />
            <div className="flex gap-2 h-10">
              <div className="flex items-center justify-center hover:bg-opacity-10 rounded-lg gap-2">
                <div className="bg-green-800 bg-opacity-55 h-4 w-4 rounded-full" />
                <p>All system operational</p>
              </div>
              {/* {SocialImageConstants.map((social, index) => (
                <Link
                  href={social.url}
                  target="_blank"
                  key={index}
                  className={`duration-200 hover:pt-2`}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="dark:invert"
                  />
                </Link>
              ))} */}
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
                      className="mt-1 hover:pl-1 cursor-pointer hover:text-primary hover:underline text-muted-foreground duration-150"
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
      <div className="container [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-blue-500/70 w-full" />
      <div className="flex items-center w-full justify-center gap-4 font-medium py-5">
        <div className="w-full flex items-center justify-between container px-3 md:px-10">
          <p className="text-muted-foreground">
            © 2024 Overlogic Universe. All rights reserved.
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
