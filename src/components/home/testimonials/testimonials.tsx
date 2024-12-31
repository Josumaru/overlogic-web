import { NextPage } from "next";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { LangProps } from "@/types/lang";
import SectionTitle from "@/components/common/text/section-title";
import SectionDesc from "@/components/common/text/section-desc";
import { getDictionary } from "@/app/[lang]/dictionaries";
import CurvedSeparator from "@/components/ui/curved-separator";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = (await getDictionary(lang)).home.testimonials;
  const reviews = dict.reviews;
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="flex items-center justify-center px-3 md:px-10">
      <div className="container relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <div className="z-10 w-full">
        <CurvedSeparator />
          <SectionTitle>
            <span className="text-primary">{dict.title[0]}</span>{" "}
            {dict.title[1]}{" "}
            <span className="text-primary">{dict.title[2]}</span>{" "}
            {dict.title[3]} <br />
            {dict.title[4]}{" "}
            <span className="text-primary">{dict.title[5]}</span>
          </SectionTitle>
          <SectionDesc>{dict.subTitle}</SectionDesc>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Testimonials;