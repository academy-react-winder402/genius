import { CategoryItem } from "./Categories/CategoryItem";
import { landingCategoryItems } from "./Categories/landingCategoryItems";

import itemsAfter from "../../assets/images/Landing/LandingCategories/items-after.svg";
import backgroundDots from "../../assets/images/Landing/LandingCategories/bg-dots.svg";

const LandingCategories = () => {
  return (
    <div className="pr-7 flex flex-col gap-0 my-32">
      <div className="hidden lg:flex justify-end">
        <img className="w-[70%] h-[500px]" src={itemsAfter} />
      </div>
      <div className="flex flex-col lg:flex-row gap-[400px] lg:-mt-[530px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[40%] bg-landingCategoriesTitleAfter bg-right-top bg-no-repeat lg:pr-[40px] lg:pt-[60px] px-5 lg:px-0">
            <h3 className="font-[900] text-[40px] text-text1">
              دسته بندی‌ دوره‌ها
            </h3>
            <p className="font-[500] text-text2 mt-[12px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <img src={backgroundDots} className="hidden lg:block lg:mt-52" />
          </div>
          <div className="lg:w-[56%] mt-12 lg:mt-0">
            <div className="flex justify-center items-center flex-wrap gap-4">
              {landingCategoryItems.map((item) => (
                <div key={item.id} style={{ marginTop: item.marginTop }}>
                  {item.items.map((categoryItem) => (
                    <CategoryItem
                      key={categoryItem.title}
                      categoryItem={categoryItem}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingCategories };
