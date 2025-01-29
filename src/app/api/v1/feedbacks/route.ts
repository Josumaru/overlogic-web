import { db } from "@/db/db";
import { feedbacks, InsertFeedbacksType } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;
    const instagram = formData.get("instagram") as string;
    const x = formData.get("x") as string;
    const testimony = formData.get("testimony") as string;
    const publicTestimony = formData.get("public")?.toString().toLocaleLowerCase() === "true";

    if (name && company && position && testimony) {
      const data: InsertFeedbacksType = {
        name,
        company,
        position,
        testimony,
        instagram,
        public: publicTestimony,
        x,
      };
      console.log(data);

      await db.insert(feedbacks).values(data);
      await axios.post(DISCORD_WEBHOOK_URL, {
        embeds: [
          {
            title: "New Feedback Recorded",
            description: "A new fedback has been recorded",
            color: 3447003,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Company", value: company, inline: true },
              { name: "Testimony", value: testimony, inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      });
    } else {
      console.log("Missing fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "Order recorded successfully" });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: "Something Wrong" }, { status: 500 });
  }
}
