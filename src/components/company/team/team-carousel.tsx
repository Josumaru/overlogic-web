"use client";
import { Fragment, useEffect, useRef, useState } from "react";
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
import { IDictionary } from "@/types/dictionary";
import { ExternalLinkIcon } from "lucide-react";
import { TeamConstants } from "@/constants/TeamConstants";
import { Lang } from "@/types/lang";
import { ITeam } from "@/types/team";
import SocialMediaDock from "./social-media-dock";
interface Props {
  members: ITeam[];
  readMore: string;
}

const TeamCarousel: NextPage<Props> = ({ members, readMore }) => {
  const [currentMember, setCurrentMember] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

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
      {members.map((member, index) => (
        <div
          key={index}
          className="h-[520px] max-w-screen-sm relative cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            maxWidth: "calc(100vw - 24px)",
            flex: index === currentMember ? "0 0 520px" : "0 0 200px",
          }}
          onClick={() => setCurrentMember(index == currentMember ? -1 : index)}
        >
          <Image
            src={member.image[0]}
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
                <div className="flex items-center gap-4">
                  <TextAnimate
                    animation="blurIn"
                    by="word"
                    className="text-2xl font-semibold dark:text-white text-black"
                  >
                    {member.name}
                  </TextAnimate>
                  <Link href={`/company/member/${member.nickname.toLowerCase()}`}>
                    <div className="flex text-muted-foreground gap-1 hover:text-primary z-40 ">
                      <p className="text-end text-s translate-y-1">
                        {readMore}
                      </p>
                      <ExternalLinkIcon className="size-4 translate-y-2" />
                    </div>
                  </Link>
                </div>
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
                <SocialMediaDock
                  github={member.socialLinks.github}
                  instagram={member.socialLinks.instagram}
                  linkedin={member.socialLinks.linkedin}
                />
              </div>
            </Fragment>
          )}

          <div
            className={cn(
              "absolute m-5 transition-all duration-300 ease-in-out",
              index == currentMember ? " top-0 left-0" : " bottom-0 right-0"
            )}
          >
            {member.nickname.split("").map((text, index) => (
              <p
                key={index}
                className="text-4xl font-bold text-center dark:text-white text-black"
              >
                {text.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCarousel;
