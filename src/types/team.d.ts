import { StaticImageData } from "next/image";

export interface ITeam {
  name: string;
  desc: string;
  role: string;
  nickname: string;
  image: string[];
  socialLinks: {
    instagram: string;
    github: string;
    linkedin: string;
  };
}
