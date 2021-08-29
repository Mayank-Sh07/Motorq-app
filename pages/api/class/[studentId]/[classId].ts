import type { NextApiRequest, NextApiResponse } from "next";
import {
  getStudentData,
  updateClasses,
  decrementStudent,
} from "../../../../supabase/functions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Processing DELETE requests
  if (req.method === "DELETE") {
    const { classId, studentId } = req.query;
    const student = await getStudentData(studentId);
    const index = student.classes.indexOf(parseInt(String(classId)));
    if (index > -1 && student.classes.length > 0) {
      student.classes?.splice(index, 1);
      if (student.classes.length == 0) student.classes = null;
      updateClasses(student.classes, studentId);
      decrementStudent(classId);
      res.status(200).end();
      return;
    } else {
      res.status(400).end();
      return;
    }
  }

  // Handling other HTTP methods
  else {
    res.status(400).end();
  }
};
