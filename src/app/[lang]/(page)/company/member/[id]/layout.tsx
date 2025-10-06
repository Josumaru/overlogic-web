import { TeamConstants } from "@/constants/TeamConstants";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; id: string };
}) {
  const { lang, id } = await params;
  const normalizeNickname = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  const data = (await TeamConstants({ lang: lang as "id" | "en" })).find(
    (member) => normalizeNickname(member.nickname) === normalizeNickname(id)
  );

  if (!data) return;

  return {
    title: data.name,
    description: data.desc,
    openGraph: {
      title: data.name,
      description: data.desc,
      url: data.socialLinks.instagram,
      type: "article",
      images: [
        {
          url: data.image[0],
          width: 1200,
          height: 630,
          alt: data.name,
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
