import PropTypes from "prop-types";

import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";

const BlogItemStyleTwo = ({
  image,
  allSeas,
  createdAt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <img src={image} className="cursor-pointer" />
      <div className="flex gap-4 mt-4">
        <div className="landingBlogItemStyleTwoBackground">
          <img src={eyeIcon} className="-mt-[2px]" />
          <span className="landingBlogItemsStyleTwoColor">
            {allSeas} بازدید
          </span>
        </div>
        <div className="landingBlogItemStyleTwoBackground">
          <img src={calenderIcon} className="-mt-[2px]" />
          <span className="landingBlogItemsStyleTwoColor">{createdAt}</span>
        </div>
      </div>
      <h3 className="font-[700] text-[20px] lg:text-[32px] text-text1 cursor-pointer">
        {title}
      </h3>
      <p className="font-[500] text-text2 text-justify">{description}</p>
    </div>
  );
};

BlogItemStyleTwo.propTypes = {
  image: PropTypes.string,
  allSeas: PropTypes.number,
  createdAt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export { BlogItemStyleTwo };
