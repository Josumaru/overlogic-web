import { RainbowButton } from "@/components/ui/rainbow-button";
import { IShowcase } from "@/types/showcase";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showcase: IShowcase;
  index: number;
  seeMore: string;
}

const ShowcaseCard: NextPage<Props> = async ({ showcase, index, seeMore }) => {
  return (
    <div className="border-zinc-300 dark:border-zinc-800 p-3 border rounded-3xl gap-3 flex flex-col">
      <div className="flex justify-between">
        <p className="font-semibold">{showcase.title}</p>
        <p className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl text-xs">
          {showcase.type[0]}
        </p>
      </div>
      <div>
        <Image
          className="rounded-lg"
          src={showcase.image}
          width={1080}
          height={560}
          alt={showcase.title}
        />
      </div>
      <p className="text-muted-foreground line-clamp-3">
        {showcase.description}
      </p>
      <RainbowButton>
        <Link href={`/showcase/${index}`} target="_blank">
          {seeMore}
        </Link>
      </RainbowButton>
    </div>
  );
};

export default ShowcaseCard;
