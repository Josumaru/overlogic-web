"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

const OverlogicLogo = ({}) => {
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Image className={`aspect-auto transition-all duration-300 ${showLogo ? "w-[9rem] opacity-100" : "w-0 opacity-0"}`} src={ImageConstants.logo.overlogic} height={2000} width={2000} alt="overlogic-logo" />;
};

export default OverlogicLogo;