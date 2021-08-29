import dynamic from "next/dynamic";
import useSWR from "swr";
import Link from "next/link";
import Loader from "../components/Loader";
import { useUser } from "../supabase/authentication";

const GoogleMapInstance = dynamic(() => import("../components/GoogleMap"), {
  ssr: false,
});

const fetchMapData = (url) => fetch(url).then((r) => r.json());

export default function Map(params) {
  let courseCode = "MAT2001";
  const { data } = useSWR("/api/classes-on-map/" + courseCode, fetchMapData);
  const { user } = useUser();
  if (!data || !user) {
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
    <div className="h-screen w-full">
      <GoogleMapInstance {...data.data} />
    </div>
  );
}
