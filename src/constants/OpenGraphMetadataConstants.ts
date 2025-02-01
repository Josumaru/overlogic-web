/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import OpenGraphImage from "@/assets/metadata/opengraph-image.png";
import { IDictionary } from "@/types/dictionary";

const OpenGraphMetadataConstants = (dict: IDictionary) => {
  return {
    type: "website",
    url: "https://overlogic.io",
    title: "Overlogic Universe",
    description: dict.home.headerDesc.join(" "),
    images: [
      {
        url: OpenGraphImage.src,
        width: 1517,
        height: 1080,
      },
    ],
  };
};

export { OpenGraphMetadataConstants };
