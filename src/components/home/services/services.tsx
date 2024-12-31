import { NextPage } from "next";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, GlobeIcon, Share2Icon, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { LangProps } from "@/types/lang";
import { Calendar } from "@/components/ui/calendar";
import Globe from "@/components/ui/globe";
import RetroGrid from "@/components/ui/retro-grid";
import { getDictionary } from "@/app/[lang]/dictionaries";
import CurvedSeparator from "@/components/ui/curved-separator";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const Services: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  const servicesDict = dict.home.services;

  const services = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div></div>
        // <Marquee
        //   pauseOnHover
        //   className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        // >
        //   {files.map((f, idx) => (
        //     <figure
        //       key={idx}
        //       className={cn(
        //         "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        //         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        //         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        //         "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
        //       )}
        //     >
        //       <div className="flex flex-row items-center gap-2">
        //         <div className="flex flex-col">
        //           <figcaption className="text-sm font-medium dark:text-white ">
        //             {f.name}
        //           </figcaption>
        //         </div>
        //       </div>
        //       <blockquote className="mt-2 text-xs">{f.body}</blockquote>
        //     </figure>
        //   ))}
        // </Marquee>
      ),
    },
    {
      Icon: Zap,
      name: servicesDict.performance.title,
      description: servicesDict.performance.subTitle,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div>
          {/* <RetroGrid /> */}
        </div>
      ),
    },
    {
      Icon: GlobeIcon,
      name: servicesDict.business.title,
      description: servicesDict.business.subTitle,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div>
          {/* <Globe /> */}
        </div>
      ),
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
      background: (
        <div>
          {/* <Calendar
            mode="single"
            selected={new Date(2022, 4, 11, 0, 0, 0)}
            className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
          /> */}
        </div>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center px-3 md:px-10">
      <div className="container">
        <CurvedSeparator />
        <div className="flex items-end flex-col text-end">
          <SectionTitle>
            {servicesDict.title[0]}
            {", "}
            <span className="text-primary">{servicesDict.title[1]}</span>{" "}
            {servicesDict.title[2]} <br className="hidden md:block" />
            {servicesDict.title[3]}{" "}
            <span className="text-primary">{servicesDict.title[4]}</span>
            {servicesDict.title[5]}{" "}
            <span className="text-primary">{servicesDict.title[6]}</span>{" "}
            {servicesDict.title[7]}{" "}
            <span className="text-primary">{servicesDict.title[8]}</span>{" "}
          </SectionTitle>
          <SectionDesc>{dict.pricing.subTitle}</SectionDesc>
        </div>
        <BentoGrid>
          {services.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Services;
