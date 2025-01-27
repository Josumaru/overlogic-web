"use client";
import { Fragment, useRef, useState } from "react";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";
interface Props {}

const TeamCarousel: NextPage<Props> = ({}) => {
  const [currentMember, setCurrentMember] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const teamMembers = [
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Chisato Nishikigi",
      desc: "Chisato is a young girl with medium-length blonde hair worn in a bob cut, and red eyes. She usually wears a red ribbon, tied in a bow on the left side of her hair.",
      role: "Direct Attack Agent",
      nicname: "CHISATO",
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      },
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!isDragging || !carousel) return;

    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={carouselRef}
      className="w-full h-[520px] overflow-x-scroll flex flex-nowrap no-scrollbar gap-5"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="h-[520px] relative cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            // maxWidth: window.innerWidth - 36,
            flex: index === currentMember ? "0 0 520px" : "0 0 200px",
          }}
          onClick={() => setCurrentMember(index == currentMember ? -1 : index)}
        >
          <Image
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full rounded-xl"
            width={700}
            height={700}
          />
          <div
            className={cn(
              "w-full h-full absolute top-0 bg-background transition-colors",
              index == currentMember ? "opacity-0" : "opacity-60"
            )}
          />
          {index == currentMember && (
            <Fragment>
              <div className="absolute bottom-0 p-5 h-full w-full flex flex-col justify-end bg-gradient-to-b from-[#ffffff00] dark:to-black to-white">
                <TextAnimate
                  animation="blurIn"
                  by="word"
                  className="text-2xl font-semibold dark:text-white text-black"
                >
                  {member.name}
                </TextAnimate>
                <TextAnimate
                  animation="blurIn"
                  className="text-xl dark:text-white font-normal text-black"
                >
                  {member.role}
                </TextAnimate>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="text-l text-muted-foreground line-clamp-2"
                >
                  {member.desc}
                </motion.p>
              </div>
              <div className="absolute top-0 right-0 m-5">
                <Dock className="bg-background">
                  <DockIcon>
                    <Link href={member.socialLinks.linkedin}>
                      <LinkedInLogoIcon />
                    </Link>
                  </DockIcon>
                  <DockIcon>
                    <Link href={member.socialLinks.github}>
                      <GitHubLogoIcon />
                    </Link>
                  </DockIcon>
                  <DockIcon>
                    <Link href={member.socialLinks.instagram}>
                      <InstagramLogoIcon />
                    </Link>
                  </DockIcon>
                </Dock>
              </div>
            </Fragment>
          )}

          <div
            className={cn(
              "absolute m-5 transition-all duration-300 ease-in-out",
              index == currentMember ? " top-0 left-0" : " bottom-0 right-0"
            )}
          >
            {member.nicname.split("").map((text, index) => (
              <p
                key={index}
                className="text-4xl font-bold text-center dark:text-white text-black"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCarousel;
