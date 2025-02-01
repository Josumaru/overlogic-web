/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { AuthorsMetadataConstants } from "./AuthorMetadataConstants";
import { OpenGraphMetadataConstants } from "./OpenGraphMetadataConstants";
import { Metadata } from "next";
import { KeywordMetadataConstants } from "./KeywordMetadataConstants";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { ImageConstants } from "./ImageConstants";

const MetadataConstant = async (lang: Lang): Promise<Metadata> => {
  const dict = await getDictionary(lang.lang)
  return {
    title: "Overlogic Univserse",
    description: dict.home.headerDesc.join(" "),
    keywords: KeywordMetadataConstants,
    authors: AuthorsMetadataConstants,
    abstract: dict.company.header.subTitle.join(" "),
    publisher: "Overlogic Universe",
    openGraph: OpenGraphMetadataConstants(dict),
    icons: {
      icon: ImageConstants.common.iconLogo.src,
      apple: ImageConstants.common.iconLogo.src,
    },
    metadataBase: new URL("https://overlogic.io"),
  };
};

export { MetadataConstant };
