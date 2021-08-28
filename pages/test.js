export default function Test(params) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card />
        </div>
      </div>
    </section>
  );
}

function Card(params) {
  return (
    <div className="py-4 px-2 lg:w-1/2">
      <div className=" h-auto bg-gray-100 bg-opacity-75 px-4 pt-12 pb-12 rounded-xl border-2 border-indigo-200 overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          Raclette Blueberry Nextious Level
        </h1>
        <p className="mb-2 text-base font-medium">Faculty Name</p>
        <p className="mb-3">Friday 12:00 AM</p>
        <a className="text-indigo-500 inline-flex items-center">
          Learn More
          {/* Icon here */}
        </a>
      </div>
    </div>
  );
}
