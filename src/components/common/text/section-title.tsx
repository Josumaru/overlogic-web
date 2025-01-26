import { NextPage } from "next";

interface Props {
  text: string;
  coloredText: string[];
}

const SectionTitle: NextPage<Props> = ({ text, coloredText }) => {
  return (
    <p
      className="text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
      dangerouslySetInnerHTML={{
        __html: text
          .split(" ")
          .map((text) =>
            coloredText.includes(text)
              ? `<span class="text-primary">${text}</span>`
              : text
          )
          .join(" "),
      }}
    />
  );
};

export default SectionTitle;
