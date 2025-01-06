import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { PageData } from "@/types/index";

const payload = JSON.parse(
  fs.readFileSync(path.resolve("./server/payload.json"), {
    encoding: "utf8",
  })
) as { pages: PageData[] };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(payload.pages);
}
