"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

const projects: Object[] = [
  { "UMS IID": ImageConstants.project.umsiid },
  { "Anugerah Powder Coating": ImageConstants.project.anugerah },
  { "Pinleaf Care": ImageConstants.project.pinleaf },
];

export default function ProjectImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setFade(false); 
      }, 500); 
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  
  const currentProject = projects[currentIndex];
  const [altText] = Object.keys(currentProject);
  const [imageSrc] = Object.values(currentProject);

  return (
    <div className="h-full w-full md:rounded-[1.5rem] rounded-[0.5rem]  relative p-[0.6rem] overflow-hidden">
      <div className="h-full w-full md:rounded-[1.5rem] rounded-[0.5rem]  bg-background">
      <div
        className={`h-full w-full md:rounded-[1.5rem] rounded-[0.5rem]  transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          className="h-full w-full md:rounded-[1.5rem] rounded-[0.5rem] "
          src={imageSrc}
          alt={altText}
          width={3000}
          height={3000}
        />
      </div>
      </div>
      
    </div>
  );
}
