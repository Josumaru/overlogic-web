import { NextPage } from "next";
import { BlurFade } from "@/components/ui/blur-fade";
import { Lang } from "@/types/lang";
import Container from "@/components/common/container";
import SectionTitle from "@/components/common/text/section-title";
import { getDictionary } from "@/util/dictionaries";
import SectionDesc from "@/components/common/text/section-desc";
import { GalleryImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

// const images = Array.from({ length: 9 }, (_, i) => {
//   const isLandscape = i % 2 === 0;
//   const width = isLandscape ? 800 : 600;
//   const height = isLandscape ? 600 : 800;
//   return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
// });

const Gallery: NextPage<Lang> = async ({ lang }) => {
  const dict = (await getDictionary(lang)).company;
  return (
    <Container>
      <div className="flex justify-end flex-col items-end text-end">
        <SectionTitle
          text={dict.gallery.title}
          coloredText={[
            "Overlogic",
            "Overlogic,",
            "Inovasi",
            "Kebersamaan",
            "Innovation",
            "Togetherness",
          ]}
        />
        <SectionDesc>{dict.gallery.subTitle}</SectionDesc>
      </div>
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3">
          {GalleryImageConstants.map((imageUrl, idx) => (
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

export default Gallery;
