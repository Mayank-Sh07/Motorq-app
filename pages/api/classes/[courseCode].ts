import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Processing GET requests
  if (req.method === "GET") {
    const { courseCode } = req.query;
    res.status(200).json({ name: `/classes of ${courseCode} fetched` });
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try GET request" });
  }
};
