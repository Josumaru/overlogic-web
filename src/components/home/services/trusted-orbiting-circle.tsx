import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

export function TrustedOrbitingCircles() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <OrbitingCircles iconSize={120}>
        <Image
          src={ImageConstants.logo.anugerahLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />

        <Image
          src={ImageConstants.logo.umsIidLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />
        <Image
          src={ImageConstants.logo.pineleafLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />
      </OrbitingCircles>
      <OrbitingCircles iconSize={70} radius={100} reverse speed={2}>
        <Image
          src={ImageConstants.logo.anugerahLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />
        <Image
          src={ImageConstants.logo.umsIidLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />
        <Image
          src={ImageConstants.logo.pineleafLogo}
          alt="Anugerah Powder Coating"
          className="brightness-[0] opacity-60 dark:invert"
        />
      </OrbitingCircles>
    </div>
  );
}
