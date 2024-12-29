import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";

const PricingButton = ({
  children,
  href,
}: {
  children: string;
  href?: string;
}) => {
  return (
    <Link href={href ?? ""}>
      <RainbowButton className="inline-block w-full">{children}</RainbowButton>
    </Link>
  );
};

export default PricingButton;
