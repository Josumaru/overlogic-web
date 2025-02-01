import { IShowcase } from "@/types/showcase";
import { ImageConstants } from "./ImageConstants";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";

export const ShowcaseConstants = async ({
  lang,
}: Lang): Promise<IShowcase[]> => {
  const dict = await getDictionary(lang);
  return [
    {
      image: ImageConstants.showcase.umsiid,
      description: dict.showcase.projects.umsiid.description,
      link: "https://ums-iid.com",
      title: dict.showcase.projects.umsiid.title,
      type: [dict.showcase.type.web],
    },
    {
      image: ImageConstants.showcase.anugerah,
      description: dict.showcase.projects.anugerah.description,
      link: "https://anugerahpowdercoating.com/",
      title: dict.showcase.projects.anugerah.title,
      type: [dict.showcase.type.web],
    },
    {
      image: ImageConstants.showcase.pinleaf,
      description: dict.showcase.projects.pinleaf.description,
      link: "https://pineleaf.id",
      title: dict.showcase.projects.pinleaf.title,
      type: [dict.showcase.type.web],
    },
    {
      image: ImageConstants.showcase.josumaru,
      description: dict.showcase.projects.josumaru.description,
      link: "https://josumaru.my.id",
      title: dict.showcase.projects.josumaru.title,
      type: [dict.showcase.type.web],
    },
    {
      image: ImageConstants.showcase.vido,
      description: dict.showcase.projects.vido.description,
      link: "https://vido.josumaru.my.id",
      title: dict.showcase.projects.josumaru.title,
      type: [dict.showcase.type.ai],
    },
    {
      image: ImageConstants.showcase.sheesh,
      description: dict.showcase.projects.sheesh.description,
      link: null,
      title: dict.showcase.projects.sheesh.title,
      type: [dict.showcase.type.mobile],
    },
    {
      image: ImageConstants.showcase.parky,
      description: dict.showcase.projects.parky.description,
      link: null,
      title: dict.showcase.projects.parky.title,
      type: [dict.showcase.type.mobile],
    },
    {
      image: ImageConstants.showcase.fospresence,
      description: dict.showcase.projects.fospresence.description,
      link: null,
      title: dict.showcase.projects.fospresence.title,
      type: [dict.showcase.type.mobile],
    },
    {
      image: ImageConstants.showcase.fostifest,
      description: dict.showcase.projects.fostifest.description,
      link: "https://fostifest.fostiums.org/",
      title: dict.showcase.projects.fostifest.title,
      type: [dict.showcase.type.web],
    },
    {
      image: ImageConstants.showcase.nusaira,
      description: dict.showcase.projects.nusaira.description,
      link: "https://nusaira.vercel.app/",
      title: dict.showcase.projects.nusaira.title,
      type: [dict.showcase.type.web, dict.showcase.type.ai],
    },
  ];
};
