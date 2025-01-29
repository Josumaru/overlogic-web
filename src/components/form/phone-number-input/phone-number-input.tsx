"use client";
import { NextPage } from "next";
import { useState } from "react";
import { PhoneInput } from "./phone-input";
import { cn } from "@/lib/utils";
interface Props {
  handleInputChange: (field: string, value: any) => void;
  errors: { [key: string]: string };
  field: string;
  value: string;
  title?: string;
  placeholder?: string;
}

const PhoneNumberInput: NextPage<Props> = ({
  errors,
  handleInputChange,
  value,
  placeholder,
  title,
  field,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="translate-y-5">
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
        <PhoneInput
          name={field}
          value={currentValue}
          onChange={(phone) => handleInputChange(field, phone)}
          placeholder={placeholder}
          maxLength={20}
          className={cn(
            `outline-none h-14 bg-transparent w-full ${
              errors.name ? "border-red-500" : ""
            }`,
            errors[field] ? "text-red-500" : ""
          )}
        />
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
