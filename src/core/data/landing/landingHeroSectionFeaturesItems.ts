import teacherIcon from "../../../assets/images/Landing/teacher.svg";
import clockIcon from "../../../assets/images/Landing/clock.svg";
import peopleIcon from "../../../assets/images/Landing/people.svg";

interface landingHeroSectionFeaturesItemsInterface {
  number: number;
  label: string;
  icon: string;
}

export const landingHeroSectionFeaturesItems = (
  teacherCount: number,
  usersCount: number,
  studentsCount: number
) => {
  const landingHeroSectionFeatures: landingHeroSectionFeaturesItemsInterface[] =
    [
      { number: teacherCount, label: "مدرس مجرب", icon: teacherIcon },
      { number: usersCount, label: "دقیقه اموزش", icon: clockIcon },
      { number: studentsCount, label: "نفر دانشجو", icon: peopleIcon },
    ];

  return landingHeroSectionFeatures;
};
