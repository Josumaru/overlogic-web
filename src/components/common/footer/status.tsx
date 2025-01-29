"use client";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  dict: {
    up: string;
    hasIissues: string;
    underMaintenance: string;
    loading: string;
  };
}

const Status: NextPage<Props> = ({ dict }) => {
  const [color, setColor] = useState<string>("gray");
  const [message, setMessage] = useState<string>(dict.loading);

  useEffect(() => {
    const fetchDict = async () => {
      setMessage(dict.loading);
      const response = await fetch(
        "https://overlogic.instatus.com/summary.json"
      );
      const data = await response.json();
      const status = await data.page.status;
      switch (status) {
        case "UP":
          setColor("green");
          setMessage(dict.up);
          break;
        case "HASISSUES":
          setColor("red");
          setMessage(dict.hasIissues);
          break;
        case "UNDERMAINTENANCE":
          setColor("yellow");
          setMessage(dict.underMaintenance);
          break;
        default:
          setColor("green");
          setMessage(dict.up);
      }
    };
    fetchDict();
  }, []);

  return (
    <Link href={"https://overlogic.instatus.com"} target="_blank">
      <div className="flex items-center mt-3 justify-center gap-2">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <p className="cursor-pointer hover:text-primary dark:text-white transition-color duration-150">
          {message}
        </p>
      </div>
    </Link>
  );
};

export default Status;
