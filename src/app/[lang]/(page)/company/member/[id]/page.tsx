import Container from "@/components/common/container";
import NotFound from "@/components/common/not-found";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Dock, DockIcon } from "@/components/ui/dock";
import { TeamConstants } from "@/constants/TeamConstants";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import BorderBanner from "@/components/company/team/border-banner";
import SocialMediaDock from "@/components/company/team/social-media-dock";

interface Props {
  params: {
    lang: string;
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { lang, id } = params;
  const member = (await TeamConstants({ lang: lang as "id" | "en" })).find(
    (member) => member.nickname.toLowerCase() == id.toLowerCase()
  );
  let index = 0;

  try {
    index = parseInt(id);
  } catch (error) {
    index = -1;
  }

  if (!member) {
    return <NotFound />;
  }

  return (
    <Container className="">
      {/* Banner Section */}
      <div className="relative w-full h-auto flex flex-col items-center">
        {/* Banner Image */}
        <BorderBanner image={member.image[0]} alt={member.name} />

        {/* Profile Section */}
        <div className="relative -mt-16 lg:-mt-16 flex flex-col lg:flex-row items-center justify-between w-full rounded-lg">
          <div className="relative flex flex-col lg:flex-row items-center w-full xl:translate-x-32">
            {/* Profile Image */}
            <div className="relative rounded-[40px]  aspect-square w-32 h-32 lg:w-40 lg:h-40">
              <Image
                src={member.image[0]}
                width={160}
                height={160}
                alt={member.name}
                className="h-full aspect-square w-full object-cover backdrop-blur-lg shadow-md rounded-[40px]"
              />
            </div>
            <div className="mt-4 lg:hidden">
              <SocialMediaDock
                github={member.socialLinks.github}
                instagram={member.socialLinks.instagram}
                linkedin={member.socialLinks.linkedin}
              />
            </div>
            {/* Name and Verification */}
            <div className="lg:ml-4 flex flex-col w-full">
              <div className="mt-4 lg:mt-14">
                <div className="flex items-start justify-start flex-col">
                  <p className="text-lg lg:text-2xl font-bold">
                    {member.name}
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <div className="mt-16 lg:mt-14 w-full justify-end hidden lg:flex gap-10 text-center">
            <div>
              <SocialMediaDock
                github={member.socialLinks.github}
                instagram={member.socialLinks.instagram}
                linkedin={member.socialLinks.linkedin}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-muted-foreground">{member.desc}</p>
      </div>
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3 mt-5">
          {member.image.map((imageUrl, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <Image
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Page;
