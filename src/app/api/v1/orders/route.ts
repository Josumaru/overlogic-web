import { db } from "@/db/db";
import { InsertOrdersType, orders } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const project = formData.get("project") as string;
    const position = formData.get("position") as string;
    const services = Array.from(formData.getAll("services"))
      .map((service) => service)
      .join(", ");
    const brief = formData.get("brief") as string;
    const additional = formData.get("additional") as string;
    const question = formData.get("question") as string;
    const budget = formData.get("budget") as string;
    console.log({name,
      email,
      phone,
      company,
      project,
      position,
      services,
      additional,
      brief,
      budget,
      question,})
    if (
      name &&
      email &&
      phone &&
      company &&
      project &&
      position &&
      services &&
      budget
    ) {
      const data: InsertOrdersType = {
        name,
        email,
        phone,
        company,
        project,
        position,
        services,
        additional,
        brief,
        budget,
        question,
      };
      
      await db.insert(orders).values(data);
      await axios.post(DISCORD_WEBHOOK_URL, {
        embeds: [
          {
            title: "New Order Recorded",
            description: "A new order has been recorded",
            color: 3447003,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Company", value: company, inline: true },
              { name: "Services", value: services, inline: false },
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
