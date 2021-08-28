import Link from "next/link";
import { supabase } from "../supabase";
import { useUser } from "../supabase/authentication";
import { HiArrowRight, HiOutlineLogout } from "react-icons/hi";

// Layout Component that adds Header and Footer to all pages
export default function Layout({ children }) {
  return (
    <div>
      <div className="container m-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

function Header(params) {
  const { user } = useUser();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
        </a>
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
          <Link href="/login">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <HiArrowRight className="ml-1" />
            </button>
          </Link>
        ) : (
          <button
            onClick={async () => {
              let { error } = await supabase.auth.signOut();
              if (error) {
                alert(error.message);
              }
            }}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            logout
            <HiOutlineLogout className="ml-1" />
          </button>
        )}
      </div>
    </header>
  );
}

function Footer(params) {
  return (
    <footer className="text-gray-600 body-font bg-indigo-100">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
            <span className="ml-3 text-xl md:text-3xl">Course++</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            For Students, By Students
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 md:text-xl">
              Features
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Course Selection
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Time Table</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Map View</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 md:text-xl">
              Usage
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 md:text-xl">
              Developer
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">LinkedIn</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Github</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-gray-500 text-sm sm:text-left">
            © 2020 Course++ Made with ❤️ by
            <a
              href="https://mash07.vercel.app/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              {" @mash07"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
