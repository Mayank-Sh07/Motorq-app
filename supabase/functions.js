import { supabase } from "./index";

export async function getStudentData(studentId) {
  if (!studentId) return;
  let { data: studentArr } = await supabase
    .from("student")
    .select("*")
    .eq("student_id", studentId);
  if (studentArr == null) {
    return undefined;
  } else return studentArr[0];
}

export async function getStudentDataByRoll(rollNumber) {
  let { data: studentArr } = await supabase
    .from("student")
    .select("*")
    .eq("roll_number", rollNumber);
  if (studentArr == null) {
    return undefined;
  } else return studentArr[0];
}

export async function updateClasses(newClassArray, studentId) {
  const { error } = await supabase
    .from("student")
    .update({ classes: newClassArray })
    .eq("student_id", studentId);

  if (!error) return true;
}

export async function getStudentClasses(existingClasses) {
  if (!existingClasses) return;
  const { data } = await supabase
    .from("class")
    .select("*,course(course_name)")
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
