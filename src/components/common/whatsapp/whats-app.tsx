import { ImageConstants } from "@/constants/ImageConstants";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const WhatsApp: NextPage<Lang> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  const phoneNumber = "6282134699078";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${dict.common.whatsapp.message}`;
  return (
    <Link
      target="_blank"
      href={whatsappUrl}
      className="transition-all duration-300 hover:translate-y-[-4px] blue-shadow fixed h-[50px] w-[50px] bottom-10 right-5 z-50 cursor-pointer flex items-center justify-center bg-primary p-3 rounded-xl"
    >
      <Image
        src={ImageConstants.icon.whatsApp}
        alt={`icon-whatsapp-fixed`}
        height={30}
      />
    </Link>
  );
};

export default WhatsApp;
