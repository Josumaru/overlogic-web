import Container from "@/components/common/container";
import NotFound from "@/components/common/not-found";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShowcaseConstants } from "@/constants/ShowcaseConstants";
import { LucideExternalLink } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
  params: {
    lang: string;
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { lang, id } = params;
  const index = parseInt(id);
  const showcase = await ShowcaseConstants({ lang: lang as "id" | "en" });

  console.log(index);
  if (isNaN(index) || index < 0 || index > showcase.length) {
    return <NotFound />;
  }

  const selectedShowcase = showcase[index];

  return (
    <Container className="mt-28">
      <div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-1 relative group my-5">
            {selectedShowcase.link ? (
              <Fragment>
                <Link
                  href={selectedShowcase.link}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <p className="text-blue-500 transition-colors duration-300 text-center">
                    {selectedShowcase.title}
                  </p>
                  <LucideExternalLink className="h-4 w-4 text-blue-500" />
                </Link>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] rounded-full bg-blue-500 transition-all duration-100 group-hover:w-full"></div>
              </Fragment>
            ) : (
              <p className="transition-colors duration-300 text-center">
                {selectedShowcase.title}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center gap-2">
            {selectedShowcase.type.map((type) => (
              <p
                key={type}
                className="rounded-lg text-xs px-2 py-1 dark:bg-zinc-800 bg-zinc-200"
              >
                {type}
              </p>
            ))}
          </div>
        </div>
        <p className="mb-5 text-muted-foreground">
          {selectedShowcase.description}
        </p>
      </div>
      <div className="relative h-full rounded-2xl bg-white dark:bg-neutral-900">
        <Image
          className="rounded-2xl w-full"
          width={1080}
          height={560}
          src={selectedShowcase.image}
          alt={selectedShowcase.title}
        />
        <BorderBeam />
      </div>
    </Container>
  );
};

export default Page;
