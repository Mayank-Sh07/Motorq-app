import Layout from "../components/Layout";
import { useUser } from "../supabase/authentication";

export default function Home() {
  return (
    <div>
      <Layout>
        <main className="flex flex-col items-center justify-center w-full flex-1">
          <Hero />
        </main>
      </Layout>
    </div>
  );
}

function Hero(params) {
  const { user } = useUser();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Learn and Outshine with Course++
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The objective of Course++ is to ease the management system of
            students by features like adding/dropping/viewing courses which will
            help them to study any subject according to their will. Course++
            also provides a time-table which will help the students to schedule
            their day and prevent overlapping of slots. Students will also get
            an option to locate their classes on the map in order to ease the
            difficulty in navigating.
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-2 rounded-lg border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Feature Name
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Feature description here
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-2 rounded-lg border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Feature description here
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-2 rounded-lg border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Feature Name
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Feature description here
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-2 rounded-lg border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Feature Name
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Feature description here
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
}
