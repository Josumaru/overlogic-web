import { NextPage } from "next";

import { CalendarIcon, FileTextIcon, RocketIcon } from "@radix-ui/react-icons";
import {
  BadgeDollarSign,
  BellIcon,
  Building2,
  ComputerIcon,
  GlobeIcon,
  LockKeyholeIcon,
  SearchIcon,
  Share2Icon,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { LangProps } from "@/types/lang";
import { Calendar } from "@/components/ui/calendar";
import Globe from "@/components/ui/globe";
import RetroGrid from "@/components/ui/retro-grid";
import { getDictionary } from "@/utils/dictionaries";
import CurvedSeparator from "@/components/ui/curved-separator";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";
import { SecurityAnimatedBeam } from "./security-animated-beam";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
import { PriceRadarChart } from "./price-radar-chart";
import { Meteors } from "@/components/ui/meteors";
import { EducationAnimatedBeam } from "./education-animated-beam";
import { TrustedOrbitingCircles } from "./trusted-orbiting-circle";

const Services: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  const servicesDict = dict.home.services;

  const services = [
    {
      Icon: Building2,
      name: servicesDict.trusted.title,
      description: servicesDict.trusted.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_3%,#000_100%)] group-hover:scale-105">
          <TrustedOrbitingCircles />
        </div>
      ),
    },
    {
      Icon: Zap,
      name: servicesDict.performance.title,
      description: servicesDict.performance.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-2",
      background: (
        <div>
          <RetroGrid />
        </div>
      ),
    },
    {
      Icon: LockKeyholeIcon,
      name: servicesDict.security.title,
      description: servicesDict.security.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-2",
      background: (
        <div>
          <SecurityAnimatedBeam className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        </div>
      ),
    },
    {
      Icon: BadgeDollarSign,
      name: servicesDict.price.title,
      description: servicesDict.price.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_3%,#000_100%)] group-hover:scale-105">
          <PriceRadarChart params={servicesDict.chart} />
        </div>
      ),
    },
    {
      Icon: RocketIcon,
      name: servicesDict.innovation.title,
      description: servicesDict.innovation.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_3%,#000_100%)] group-hover:scale-105">
          <Meteors number={30} />
        </div>
      ),
    },
    {
      Icon: ComputerIcon,
      name: servicesDict.education.title,
      description: servicesDict.education.subTitle,
      href: "#",
      cta: servicesDict.more,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_3%,#000_100%)] group-hover:scale-105">
          <EducationAnimatedBeam />
        </div>
      ),
    },
    {
      Icon: SearchIcon,
      name: servicesDict.seo.title,
      description: servicesDict.seo.subTitle,
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: servicesDict.more,
      background: (
        <div className="absolute h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_2%,#000_100%)] group-hover:scale-105">
          <Image
            src={ImageConstants.services.seoLight}
            alt={servicesDict.seo.title}
            className="dark:hidden"
          />
          <Image
            src={ImageConstants.services.seoDark}
            alt={servicesDict.seo.title}
            className="dark:block hidden"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center px-3 md:px-10">
      <div className="container">
        <CurvedSeparator />
        <div className="flex items-end flex-col text-end">
          <SectionTitle
            text={servicesDict.title}
            coloredText={[
              "Bangun",
              "Kuasai",
              "Kompetitor",
              "Overlogic",
              "Build",
              "Dominate",
              "",
            ]}
          />
          <SectionDesc>{dict.pricing.subTitle}</SectionDesc>
        </div>
        <BentoGrid className="bg-transparent">
          {services.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        <CurvedSeparator down={true} />
      </div>
    </div>
  );
};

export default Services;
