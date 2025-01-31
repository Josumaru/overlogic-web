import Container from "@/components/common/container";
import NotFound from "@/components/common/not-found";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ShowcaseConstants } from "@/constants/ShowcaseConstants";
import { TeamConstants } from "@/constants/TeamConstants";
import { ITeam } from "@/types/team";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    lang: string;
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { lang, id } = params;
  const member = await TeamConstants({ lang: lang as "id" | "en" });
  let index = 0;

  try {
    index = parseInt(id);
  } catch (error) {
    index = -1;
  }

  if (isNaN(index) || index < 0 || index > member.length) {
    return <NotFound />;
  }


  const selectedMember = member[index];

  return (
    <Container className="">
      {/* Banner Section */}
      <div className="relative w-full h-auto flex flex-col items-center">
        {/* Banner Image */}
        <div className="w-full h-[150px] lg:h-[250px] relative">
          <Image
            src={selectedMember.image[0]}
            width={1024}
            height={300}
            alt={selectedMember.name}
            className="w-full h-full object-cover rounded-br-2xl rounded-bl-2xl backdrop-blur-md"
          />
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 lg:-mt-16 flex flex-col lg:flex-row items-center justify-between w-full rounded-lg">
          <div className="relative flex flex-col lg:flex-row items-center w-full xl:translate-x-32">
            {/* Profile Image */}
            <div className="relative rounded-lg w-32 h-32 lg:w-40 lg:h-40">
              <Image
                src={selectedMember.image[0]}
                width={160}
                height={160}
                alt={selectedMember.name}
                className="h-full aspect-square w-full object-cover bg-white backdrop-blur-lg border-white shadow-md rounded-[40px]"
              />
            </div>
            <div className="mt-4 lg:hidden">
              <Dock className="bg-background">
                <DockIcon>
                  <Link href={selectedMember.socialLinks.linkedin}>
                    <LinkedInLogoIcon />
                  </Link>
                </DockIcon>
                <DockIcon>
                  <Link href={selectedMember.socialLinks.github}>
                    <GitHubLogoIcon />
                  </Link>
                </DockIcon>
                <DockIcon>
                  <Link href={selectedMember.socialLinks.instagram}>
                    <InstagramLogoIcon />
                  </Link>
                </DockIcon>
              </Dock>
            </div>
            {/* Name and Verification */}
            <div className="lg:ml-4 flex flex-col w-full">
              <div className="mt-4 lg:mt-14">
                <div className="flex items-start justify-start flex-col">
                  <p className="text-lg lg:text-2xl font-bold text-white">
                    {selectedMember.name}
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground">
                    {selectedMember.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <div className="mt-16 lg:mt-14 w-full justify-end hidden lg:flex gap-10 text-center">
            <div>
              <Dock className="bg-background">
                <DockIcon>
                  <Link href={selectedMember.socialLinks.linkedin}>
                    <LinkedInLogoIcon />
                  </Link>
                </DockIcon>
                <DockIcon>
                  <Link href={selectedMember.socialLinks.github}>
                    <GitHubLogoIcon />
                  </Link>
                </DockIcon>
                <DockIcon>
                  <Link href={selectedMember.socialLinks.instagram}>
                    <InstagramLogoIcon />
                  </Link>
                </DockIcon>
              </Dock>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-muted-foreground">{selectedMember.desc}</p>
      </div>
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3 mt-5">
          {selectedMember.image.map((imageUrl, idx) => (
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
