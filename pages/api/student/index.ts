import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Processing POST requests
  if (req.method === "POST") {
    const params = req.body;
    let { user, error } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
    });
    if (error) {
      alert(error.message);
    } else {
      const { error: insError } = await supabase.from("student").insert([
        {
          student_id: user.id,
          roll_number: params.roll,
          student_name: params.name,
        },
      ]);
      if (insError) {
        res.status(500).end();
        return;
      }
    }
    res.status(200).end();
    return;
  }

  // Handling other HTTP methods
  else {
    res.status(400).send({ message: "Bad Request! Try POST request" });
    return;
  }
};
