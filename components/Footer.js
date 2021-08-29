import Link from "next/link";

// Footer Component
export default function Footer(params) {
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
