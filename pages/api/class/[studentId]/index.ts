import type { NextApiRequest, NextApiResponse } from "next";
import {
  getStudentData,
  updateClasses,
  getStudentClasses,
} from "../../../../supabase/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { studentId } = req.query;
  // getting student data
  const student = await getStudentData(studentId);
  if (student == undefined) {
    res.status(400).end();
    return;
  }
  // Processing POST requests
  if (req.method === "POST") {
    const params = req.body;
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
      const data = await getStudentClasses(student.classes);
      let clash = Boolean(false);

      // Check existing classes for clash
      data?.forEach((item) => {
        let timeSet = new Date(item.class_timing).getTime();
        let timeNew = new Date(params.class_timing).getTime();
        if (params.course_id == item.course_id) {
          // course id match
          clash = true;
        } else if (Math.abs(timeSet - timeNew) < 3600000) {
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
    const data = await getStudentClasses(student.classes);
    res.status(200).json({ classes: data });
  }

  // Handling other HTTP methods
  else {
    res.status(400).json({ name: "Bad Request! Try POST or GET request" });
  }
};
