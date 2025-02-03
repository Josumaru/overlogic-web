import { StaticImageData } from "next/image";

export interface IShowcase {
  title: string;
  description: string;
  image: string;
  link: string?;
  type: string[];
}
