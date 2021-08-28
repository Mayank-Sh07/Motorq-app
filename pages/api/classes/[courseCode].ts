import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Processing GET requests
  if (req.method === "GET") {
    const { courseCode } = req.query;
    let { data, error } = await supabase
      .from("class")
      .select("*")
      .eq("course_id", courseCode);

    res.status(200).json({ data });
    return;
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try GET request" });
    return;
  }
};
