"use client";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  handleInputChange: (field: string, value: any) => void;
  errors: { [key: string]: string };
  field: string;
  value: string;
  title: string;
  placeholder: string;
}

const TextInput: NextPage<Props> = ({
  errors,
  handleInputChange,
  value,
  placeholder,
  title,
  field,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="translate-y-4">
        <p className="font-medium">{title}</p>
        <p
          className={cn(
            "text-sm",
            errors[field] ? "text-red-500" : "text-transparent"
          )}
        >
          {errors[field] == "" || errors[field] == undefined
            ? "why you can read this?"
            : errors[field]}
        </p>
      </div>
      <div>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              onChange={(e) => handleInputChange(field, e.target)}
            />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TextInput;
