"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { NextPage } from "next";

interface Props {}

const FooterAuroraText: NextPage<Props> = ({}) => {
  return (
    <div className=" w-full flex mt-4 items-center justify-center">
      <AuroraText>
        <h1 className="text-center text-5xl sm:text-[7rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold ">
          OVERLOGIC
        </h1>
      </AuroraText>
    </div>
  );
};

export default FooterAuroraText;
