import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Processing POST requests
  if (req.method === "POST") {
    res.status(200).json({ name: "/student posted" });
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try POST request" });
  }
};
