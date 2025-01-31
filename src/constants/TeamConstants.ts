import { ImageConstants } from "./ImageConstants";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { ITeam } from "@/types/team";

export const TeamConstants = async ({
  lang,
}: Lang): Promise<ITeam[]> => {
  const dict = await getDictionary(lang);
  const members = dict.company.team.members;
  return [
    {
      name: members.rafli.name,
      desc: members.rafli.intro,
      role: members.rafli.role,
      nickname: members.rafli.nickname,
      image: ImageConstants.teams.rafli,
      socialLinks: {
        instagram: members.rafli.instagram,
        github: members.rafli.github,
        linkedin: members.rafli.linkedin,
      },
    },
    {
      name: members.ogya.name,
      desc: members.ogya.intro,
      role: members.ogya.role,
      nickname: members.ogya.nickname,
      image: ImageConstants.teams.ogya,
      socialLinks: {
        instagram: members.ogya.instagram,
        github: members.ogya.github,
        linkedin: members.ogya.linkedin,
      },
    },
    {
      name: members.chandra.name,
      desc: members.chandra.intro,
      role: members.chandra.role,
      nickname: members.chandra.nickname,
      image: ImageConstants.teams.chandra,
      socialLinks: {
        instagram: members.chandra.instagram,
        github: members.chandra.github,
        linkedin: members.chandra.linkedin,
      },
    },
    {
      name: members.joko.name,
      desc: members.joko.intro,
      role: members.joko.role,
      nickname: members.joko.nickname,
      image: ImageConstants.teams.joko,
      socialLinks: {
        instagram: members.joko.instagram,
        github: members.joko.github,
        linkedin: members.joko.linkedin,
      },
    },
  ];
};
