import { CourseDetailsCommentItem } from "./CourseDetailsCommentItem";

import avatarOne from "../../../../assets/images/CourseDetails/Comments/Avatars/avatar-1.png";
import avatarTwo from "../../../../assets/images/CourseDetails/Comments/Avatars/avatar-2.png";

const CourseDetailComments = () => {
  return (
    <div className="mt-7 flex flex-col gap-7">
      <CourseDetailsCommentItem
        avatarImage={avatarOne}
        createdAt="2 روز پیش"
        name="محمد زمانی"
        message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون."
      />
      <CourseDetailsCommentItem
        avatarImage={avatarTwo}
        createdAt="دیروز"
        name="محمد زمانی"
        message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون."
        isChildren
      />
    </div>
  );
};

export { CourseDetailComments };
