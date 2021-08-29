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

export async function getMapData(courseCode) {
  let { data: mapData, error } = await supabase
    .from("course")
    .select(`class (*, building(*))`)
    .eq("course_code", courseCode);
  if (error) console.log(error.message);
  else {
    return mapData;
  }
}

export async function decrementStudent(classId) {
  let { data: num } = await supabase
    .from("class")
    .select("strength")
    .eq("class_id", classId);

  const { error } = await supabase
    .from("class")
    .update({ strength: num[0].strength - 1 });
  if (error) {
    console.log(error.message);
  }
}

export async function incrementStudent(classId) {
  let { data: num } = await supabase
    .from("class")
    .select("strength")
    .eq("class_id", classId);

  const { error } = await supabase
    .from("class")
    .update({ strength: num[0].strength + 1 });
  if (error) {
    console.log(error.message);
  }
}
