import type { NextApiRequest, NextApiResponse } from "next";
import {
  getStudentData,
  updateClasses,
  getStudentClasses,
} from "../../../../supabase/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { studentId } = req.query;

  // Processing POST requests
  if (req.method === "POST") {
    const params = req.body;
    // getting student data
    const student = getStudentData(studentId);

    // If no classes, add class
    if (
      student.classes == null &&
      updateClasses([params.class_id], studentId)
    ) {
      res.status(200).end();
      return;
    }

    // Else check for clash
    else {
      const data = getStudentClasses(params.classes);
      let clash = Boolean(false);

      // Check existing classes for clash
      data?.forEach((item) => {
        if (params.course_id == item.course_id) {
          // course id match
          clash = true;
        } else if (params.class_timing == item.class_timing) {
          // timing collision
          clash = true;
        }
      });

      if (clash) {
        res.status(400).end();
        return;
      } else {
        updateClasses([...student.classes, params.class_id], studentId);
        res.status(200).end();
        return;
      }
    }
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
