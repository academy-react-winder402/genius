import searchIcon from "../../../assets/images/Landing/search.svg";

const LandingHeroSectionSearchBox = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder="چی میخوای یاد بگیری ؟"
          className="outline-none px-3 pl-12 rounded-[8px] placeholder:text-text-2 w-[97%] lg:w-[620px] h-[50px]"
        />
        <img src={searchIcon} className="absolute left-6 lg:left-4 top-3" />
      </div>
    </div>
  );
};

export { LandingHeroSectionSearchBox };
