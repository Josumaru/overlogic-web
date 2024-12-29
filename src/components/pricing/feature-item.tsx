import { CheckIcon } from "lucide-react";

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="mr-3 size-3" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

export default FeatureItem;
