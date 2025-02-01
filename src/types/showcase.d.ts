import { StaticImageData } from "next/image";

export interface IShowcase {
  title: string;
  description: string;
  image: StaticImageData;
  link: string?;
  type: string[];
}
