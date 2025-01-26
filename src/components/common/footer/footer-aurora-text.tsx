"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { NextPage } from "next";

interface Props {}

const FooterAuroraText: NextPage<Props> = ({}) => {
  return (
    <div className=" w-full flex mt-4 items-center justify-center">
      <AuroraText>
        <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
          OVERLOGIC
        </h1>
      </AuroraText>
    </div>
  );
};

export default FooterAuroraText;
