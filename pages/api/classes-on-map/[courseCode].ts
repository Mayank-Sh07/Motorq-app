import type { NextApiRequest, NextApiResponse } from "next";
import { getMapData } from "../../../supabase/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Processing GET requests
  if (req.method === "GET") {
    const { courseCode } = req.query;
    const data = await getMapData(courseCode);
    console.log(data);
    res.status(200).send({ data });
    return;
  }

  // Handling other HTTP methods
  else {
    res.status(400).end();
    return;
  }
};
