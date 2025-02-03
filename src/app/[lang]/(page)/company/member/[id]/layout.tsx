import { TeamConstants } from "@/constants/TeamConstants";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = (await TeamConstants({ lang: "en" })).find(
    (member) => member.nickname.toLowerCase() == params.id.toLowerCase()
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
