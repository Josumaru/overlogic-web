import { LangProps } from "@/types/lang";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  lang: string;
  status: string;
}

const Status: NextPage<Props> = async ({ lang, status }) => {
  let color = "green";
  let message = "All system operational";
  switch (status) {
    case "UP":
      color = "green";
      message = "All system operational";
      break;
    case "HASISSUES":
      color = "red";
      message = "Some systems experiencing issues";
      break;
    case "UNDERMAINTENANCE":
      color = "yellow";
      message = "System under maintenance";
      break;
    default:
      color = "green";
      message = "All system operational";
  }
  return (
    <Link href={"https://overlogic.instatus.com"} target="_blank">
      <div className="flex items-center mt-3 justify-center gap-2">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <p className="hover:pl-1 cursor-pointer hover:text-primary text-muted-foreground transition-color duration-150">{message}</p>
      </div>
    </Link>
  );
};

export default Status;
