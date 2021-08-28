import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../../supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { studentId } = req.query;

  // Processing POST requests
  if (req.method === "POST") {
    const params = req.body;

    let { data: studentArr, error } = await supabase
      .from("student")
      .select("*")
      .eq("student_id", studentId);
    const student = studentArr[0];
    if (student.classes == null) {
      const { data, error } = await supabase
        .from("student")
        .update({ classes: [params.class_id] })
        .eq("student_id", studentId);

      res.status(200).send({ name: `/class added to ${studentId} (posted)` });
      return;
    } else {
      const { data, error } = await supabase
        .from("class")
        .select("course_id,class_timing")
        .in("class_id", student.classes);
      let clash = Boolean(false);
      data.forEach((item) => {
        if (params.course_id == item.course_id) {
          clash = true;
        } else if (params.class_timing == item.class_timing) {
          clash = true;
        }
      });
      if (clash) {
        res.status(400).end();
        return;
      } else {
        const { data, error } = await supabase
          .from("student")
          .update({ classes: [...student.classes, params.class_id] })
          .eq("student_id", studentId);
        res.status(200).send({ name: `/class added to ${studentId} (posted)` });
        return;
      }
    }
    return;
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
