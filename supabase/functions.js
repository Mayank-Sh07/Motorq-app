import { supabase } from "./index";

export async function getStudentData(studentId) {
  let { data: studentArr } = await supabase
    .from("student")
    .select("*")
    .eq("student_id", studentId);
  return studentArr[0];
}

export async function updateClasses(newClassArray, studentId) {
  const { error } = await supabase
    .from("student")
    .update({ classes: newClassArray })
    .eq("student_id", studentId);

  if (!error) return true;
}

export async function getStudentClasses(existingClasses) {
  const { data } = await supabase
    .from("class")
    .select("*")
    .in("class_id", existingClasses);

  return data;
}

export async function getClasses(courseCode) {
  let { data } = await supabase
    .from("class")
    .select("*")
    .eq("course_id", courseCode);
  return data;
}
