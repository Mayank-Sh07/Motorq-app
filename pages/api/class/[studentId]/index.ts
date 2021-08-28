import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { studentId } = req.query;

  // Processing POST requests
  if (req.method === "POST") {
    res.status(200).json({ name: `/class added to ${studentId} (posted)` });
  }

  // Processing GET requests
  else if (req.method === "GET") {
    res.status(200).json({ name: `/classes of ${studentId} fetched` });
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try POST or GET request" });
  }
};
