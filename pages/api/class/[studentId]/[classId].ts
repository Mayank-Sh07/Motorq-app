import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Processing DELETE requests
  if (req.method === "DELETE") {
    const { classId, studentId } = req.query;
    res.status(200).json({ name: `${classId} class of ${studentId} deleted` });
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try DELETE" });
  }
};
