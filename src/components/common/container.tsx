import { cn } from "@/lib/utils";
import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: NextPage<Props> = ({ children, className }) => {
  return (
    <section className="px-3 md:px-10 w-full flex items-center justify-center">
      <div className={cn(`container w-full flex flex-col`, className)}>
        {children}
      </div>
    </section>
  );
};

export default Container;
