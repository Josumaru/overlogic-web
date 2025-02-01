import { Dock, DockIcon } from "@/components/ui/dock";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  linkedin: string;
  github: string;
  instagram: string;
}

const SocialMediaDock: NextPage<Props> = ({ github, instagram, linkedin }) => {
  return (
    <Dock className="bg-background">
      <DockIcon>
        <Link href={linkedin}>
          <LinkedInLogoIcon />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={github}>
          <GitHubLogoIcon />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={instagram}>
          <InstagramLogoIcon />
        </Link>
      </DockIcon>
    </Dock>
  );
};

export default SocialMediaDock;
