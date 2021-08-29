import Schedule from "../components/Schedule";
import Layout from "../components/Layout";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useSWR from "swr";
import { useUser } from "../supabase/authentication";
import { HiTrash } from "react-icons/hi";
import Loader from "../components/Loader";
import Link from "next/link";

const getUserClasses = (url) => fetch(url).then((r) => r.json());

export default function TimeTable() {
  const { user } = useUser();
  const { data, mutate } = useSWR(
    () => "http://localhost:3000/api/class/" + user?.id,
    getUserClasses
  );

  if (!user || !data) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center bg-gray-200">
        <Loader />
        <div className="mt-12">
          <Link href="/">
            <span className="text-indigo-400 hover:text-indigo-500 hover:underline cursor-pointer transition ease-in duration-300">
              Back to home page
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="">
        <Schedule data={data?.classes} />
        <div className="bg-gray-100 m-auto rounded-lg overflow-hidden mt-9 max-w-2xl">
          <List
            dense
            style={{
              width: "100%",
              padding: "auto 24px",
              backgroundColor: "inherit",
            }}
          >
            {!!data?.classes && data.classes.length > 0 ? (
              <div>
                {data.classes.map((clss) => (
                  <CourseListItem
                    {...clss}
                    key={clss.course_id}
                    user={user}
                    mutate={mutate}
                  />
                ))}
              </div>
            ) : (
              <h2 className="text-xl text-center text-gray-700 mb-6">
                No Classes found
              </h2>
            )}
          </List>
        </div>
      </div>
    </Layout>
  );
}

function CourseListItem(props) {
  return (
    <ListItem
      style={{
        border: "1px solid grey",
        borderRadius: "8px",
        margin: "8px 0px",
      }}
    >
      <ListItemText
        primary={props.course_id + ": " + props.course.course_name}
        secondary={props.faculty_name}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          size="small"
          onClick={() => {
            fetch("/api/class/" + props.user.id + "/" + props.class_id, {
              method: "DELETE",
            }).then((res) => {
              props.mutate();
            });
          }}
        >
          <HiTrash />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
