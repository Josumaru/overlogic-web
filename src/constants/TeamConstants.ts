import { ImageConstants } from "./ImageConstants";
import { Lang } from "@/types/lang";
import { getDictionary } from "@/utils/dictionaries";
import { ITeam } from "@/types/team";

export const TeamConstants = async ({ lang }: Lang): Promise<ITeam[]> => {
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
    {
      name: members.rizky.name,
      desc: members.rizky.intro,
      role: members.rizky.role,
      nickname: members.rizky.nickname,
      image: ImageConstants.teams.rizky,
      socialLinks: {
        instagram: members.rizky.instagram,
        github: members.rizky.github,
        linkedin: members.rizky.linkedin,
      },
    },
    {
      name: members.gilang.name,
      desc: members.gilang.intro,
      role: members.gilang.role,
      nickname: members.gilang.nickname,
      image: ImageConstants.teams.gilang,
      socialLinks: {
        instagram: members.gilang.instagram,
        github: members.gilang.github,
        linkedin: members.gilang.linkedin,
      },
    },
    {
      name: members.afrizal.name,
      desc: members.afrizal.intro,
      role: members.afrizal.role,
      nickname: members.afrizal.nickname,
      image: ImageConstants.teams.afrizal,
      socialLinks: {
        instagram: members.afrizal.instagram,
        github: members.afrizal.github,
        linkedin: members.afrizal.linkedin,
      },
    },
    {
      name: members.pandu.name,
      desc: members.pandu.intro,
      role: members.pandu.role,
      nickname: members.pandu.nickname,
      image: ImageConstants.teams.pandu,
      socialLinks: {
        instagram: members.pandu.instagram,
        github: members.pandu.github,
        linkedin: members.pandu.linkedin,
      },
    },
  ];
};
