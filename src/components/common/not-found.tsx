"use client";
import { NextPage } from "next";
import { AuroraText } from "../ui/aurora-text";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <div className="flex h-[720px] w-full items-center justify-center">
      <AuroraText>
        <h1 className="text-center text-5xl sm:text-[7rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold ">
          404
        </h1>
      </AuroraText>
    </div>
  );
};

export default NotFound;
