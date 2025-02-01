import { ImageResponse } from "next/og";
import { TeamConstants } from "@/constants/TeamConstants";
import { ShowcaseConstants } from "@/constants/ShowcaseConstants";


export const alt = "Overlogic Universe";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const data = (await ShowcaseConstants({ lang: "en" }))[parseInt(params.id)];
  if (!data?.image) return;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <img
          width={720}
          height={720}
          src={data.image.src}
          alt={data.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
