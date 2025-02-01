"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useExtractColors } from "react-extract-colors";

interface Props {
  image: StaticImageData;
  alt: string;
}

const BorderBanner: NextPage<Props> = ({ image, alt }) => {
  const { dominantColor } = useExtractColors(image.src);
  return (
    <div className="w-full h-[150px] lg:h-[250px] relative rounded-br-2xl rounded-bl-2xl -translate-y-1">
      <Image
        src={image}
        width={1024}
        height={300}
        alt={alt}
        className="w-full h-full object-cover rounded-br-2xl rounded-bl-2xl backdrop-blur-md"
      />
      <BorderBeam
        colorTo="#ffffff00"
        colorFrom={dominantColor ?? "#2f6cf9"}
      />
    </div>
  );
};

export default BorderBanner;
