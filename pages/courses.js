import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Layout from "../components/Layout";
import { supabase } from "../supabase";
import { useUser } from "../supabase/authentication";
import { useSnackbar } from "notistack";
import useSWR from "swr";

const fetchAllCourses = async (swrId) => {
  let { data: course, error } = await supabase.from("course").select("*");
  if (error) {
    alert(error.message);
  }
  return course;
};

const fetchAllClasses = (url) => fetch(url).then((r) => r.json());

export default function Courses(params) {
  const [value, setValue] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();

  let { data: courses } = useSWR("courses", fetchAllCourses);
  const { data: classes } = useSWR(
    () => "/api/classes/" + value?.course_code,
    fetchAllClasses
  );

  const addCourse = (courseData) => {
    fetch("/api/class/" + user.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => enqueueSnackbar("Course Added", { variant: "success" }))
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Course Clashed", { variant: "error" });
      });
  };

  function Card({ props }) {
    return (
      <div className="py-4 px-2 lg:w-1/2">
        <div className=" h-auto bg-gray-100 bg-opacity-75 px-4 pt-12 pb-6 rounded-xl border-2 border-indigo-200 overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {props.course_id}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {value?.course_name}
          </h1>
          <p className="mb-2 text-base font-medium">{props.faculty_name}</p>
          <p className="mb-8">Friday 12:00 AM</p>
          <button
            onClick={() => addCourse({ ...props })}
            class="inline-flex justify-center ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Add Course
          </button>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container max-w-4xl m-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-16 mx-auto">
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Raw Denim Heirloom Man Braid
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center px-4 md:px-8 max-w-xl m-auto mb-7">
          <Autocomplete
            id="course-search"
            options={courses}
            value={value}
            getOptionLabel={(option) =>
              option.course_code + ": " + option.course_name
            }
            getOptionSelected={(option, value) =>
              Boolean(option?.course_code === value?.course_code)
            }
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Courses"
                variant="outlined"
                placeholder="Type course name/code here"
                margin="dense"
                style={{ minWidth: "300px" }}
              />
            )}
          />
        </div>
        {!!classes && classes.data.length > 0 ? (
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {classes.data.map((clas) => (
                  <Card props={clas} key={clas.class_id} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <h2 className="text-xl text-center text-gray-700 mb-6">
            No Classes found
          </h2>
        )}
      </div>
    </Layout>
  );
}
