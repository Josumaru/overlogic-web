"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { NextPage } from "next";

interface Props {
  title: string;
}

const AuroraHeaderTitle: NextPage<Props> = ({ title }) => {
  return <AuroraText>{title}</AuroraText>;
};

export default AuroraHeaderTitle;
