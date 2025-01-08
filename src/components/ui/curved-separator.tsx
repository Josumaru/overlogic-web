import { NextPage } from "next";

interface Props {
  down?: boolean;
}
const CurvedSeparator: NextPage<Props> = ({ down = false }) => {
  return (
    <div
      style={{ transform: `rotate(${down ? 180 : 0}deg)` }}
      className="[--color:var(--color-one)] pointer-events-none relative -z-[2] lg:mx-auto h-[45rem] lg:h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#fff,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background"
    />
  );
};

export default CurvedSeparator;
