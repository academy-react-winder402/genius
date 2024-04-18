const Search = () => {
  return (
    <div className=" relative w-[100%] lg:w-auto flex justify-center">
      <input
        className="outline-none px-3 pl-12 rounded-[10px] placeholder:text-text-2 w-[87%] lg:w-[520px] h-[50px]"
        placeholder="چی میخوای یاد بگیری ؟"
      ></input>
      <img
        className="absolute left-6 lg:left-4 top-3"
        src="/src/assets/images/Landing/search.svg"
      ></img>
    </div>
  );
};
export { Search };
