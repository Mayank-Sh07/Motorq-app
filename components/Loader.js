const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} mr-2 animate-bounce delay-150`}
      ></div>
      <div
        className={`${circleCommonClasses} mr-2 animate-bounce delay-300`}
      ></div>
      <div className={`${circleCommonClasses} animate-bounce delay-500`}></div>
    </div>
  );
};

export default Loader;
