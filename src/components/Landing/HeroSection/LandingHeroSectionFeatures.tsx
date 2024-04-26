import { landingHeroSectionFeaturesItems } from "./landingHeroSectionFeaturesItems";

const LandingHeroSectionFeatures = () => {
  return (
    <div className="mt-14 flex flex-col lg:flex-row gap-4 justify-center items-center">
      {landingHeroSectionFeaturesItems.map((feature) => (
        <div
          key={feature.label}
          className="border border-solid border-[#ffffff29] rounded-[16px] px-[24px] py-[16px] flex flex-col justify-center items-center w-[90%] lg:w-[200px] bg-[#ffffff8f] dark:bg-[#00000008]"
        >
          <div className="bg-primary w-[64px] h-[64px] flex justify-center items-center rounded-[16px]">
            <img src={feature.icon} />
          </div>
          <div className="mt-[16px] flex flex-col justify-center items-center">
            <span className="font-[900] text-[23px] text-text1 dark:text-darkText">
              {feature.number}
            </span>
            <span className="text-text2 dark:text-darkText text-[16px] font-[700] mt-2">
              {feature.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { LandingHeroSectionFeatures };
