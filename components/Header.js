import Link from "next/link";
import { supabase } from "../supabase";
import { useUser } from "../supabase/authentication";
import { useSnackbar } from "notistack";
import { HiArrowRight, HiOutlineLogout } from "react-icons/hi";

// Header component
export default function Header(params) {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Course++</span>
          </div>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link passHref href={!!user ? "/courses" : "/register"}>
            <a className="mr-5 hover:text-gray-900">Courses</a>
          </Link>
          <Link passHref href={!!user ? "/timetable" : "/register"}>
            <a className="mr-5 hover:text-gray-900">Time Table</a>
          </Link>
          <Link passHref href={!!user ? "/courses" : "/map"}>
            <a className="mr-5 hover:text-gray-900">Map</a>
          </Link>
        </nav>
        {!user ? (
          <Link href="/register">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <HiArrowRight className="ml-1" />
            </button>
          </Link>
        ) : (
          <>
            <span className="mr-6">{user.email}</span>
            <button
              onClick={async () => {
                let { error } = await supabase.auth.signOut();
                if (error) {
                  enqueueSnackbar(error.message, { variant: "error" });
                } else {
                  enqueueSnackbar("Logout Successful!", { variant: "info" });
                }
              }}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              logout
              <HiOutlineLogout className="ml-1" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
