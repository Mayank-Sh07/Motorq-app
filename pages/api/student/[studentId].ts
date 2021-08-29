import type { NextApiRequest, NextApiResponse } from "next";
import { getStudentDataByRoll } from "../../../supabase/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Processing GET requests
  if (req.method === "GET") {
    const { studentId } = req.query;
    const data = await getStudentDataByRoll(studentId);
    if (!!data) res.status(200).json({ data });
    else res.status(400).end();
    return;
  }

  // Handling other HTTP methods
  else {
    res.status(400).end();
    return;
  }
};
