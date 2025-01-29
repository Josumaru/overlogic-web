"use client";
import { cn } from "@/lib/utils";
import { NextPage } from "next";

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
        <input
          placeholder={placeholder}
          className={cn(
            `outline-none h-14 bg-transparent w-full ${
              errors.name ? "border-red-500" : ""
            }`,
            errors[field] ? "text-red-500" : ""
          )}
          name={field}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
    </div>
  );
};

export default TextInput;
