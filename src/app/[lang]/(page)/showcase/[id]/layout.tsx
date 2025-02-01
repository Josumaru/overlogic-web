import { ShowcaseConstants } from "@/constants/ShowcaseConstants";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = (await ShowcaseConstants({ lang: "en" }))[parseInt(params.id)];
  if (!data?.image) return;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.link ?? "https://overlogic.io",
      type: "article",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
