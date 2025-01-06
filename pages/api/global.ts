import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { GlobalData } from "@/types/index";

const payload = JSON.parse(
  fs.readFileSync(path.resolve("./server/payload.json"), {
    encoding: "utf8",
  })
) as { global: GlobalData[] };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const locale = req.query.locale as string;

  if (!locale) {
    return res.status(400).json({ message: "Locale is required" });
  }

  const filteredData = payload.global.filter((item) => item.locale === locale);

  return res.status(200).json(filteredData[0]);
}
