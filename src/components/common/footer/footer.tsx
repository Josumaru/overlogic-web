import { Lang } from "@/types/lang";
import { NextPage } from "next";
import Link from "next/link";
import OverlogicLogo from "../navigation/overlogicLogo";
import GradientBorderSeparator from "@/components/ui/gradient-border-separator";
import { getDictionary } from "@/util/dictionaries";
import Status from "./status";
import { ThemeChanger } from "../theme-changer";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { AuroraText } from "@/components/ui/aurora-text";
import FooterAuroraText from "./footer-aurora-text";

const Footer: NextPage<Lang> = async ({ lang }) => {
  const dict = (await getDictionary(lang)).common.footer;
  const links = dict.links;
  const right = dict.right;

  return (
    <footer className=" py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <OverlogicLogo />
            </Link>

            <h1 className="dark:text-gray-300 mt-4">
              Build by{" "}
              <span className="text-[#039ee4]">
                <Link href="https://instagram.com/overlogic.id">
                  @overlogic.id
                </Link>
              </span>
            </h1>
            <div className="mt-2 flex justify-start">
              <Status dict={dict.status} />
            </div>
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Overlogic Universe. All rights
              reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {links.map((link, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{link.title}</h3>
                <ul className="space-y-2">
                  {link.subtitles.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <FooterAuroraText />
      </div>
    </footer>
  );
};

export default Footer;
