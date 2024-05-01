import dotsOneIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";
import dotsTwoIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";
import dotsThreeIcon from "../../../assets/images/common/Comments/Icons/textarea-dots-1.svg";

const AddComment = () => {
  return (
    <div className="addCommentSection">
      <div className="w-full relative">
        <textarea
          placeholder="نظر خودتو بنویس..."
          className="addCommentTextarea"
        />
        <img src={dotsOneIcon} className="absolute bottom-8 left-4" />
        <img src={dotsTwoIcon} className="absolute bottom-6 left-4" />
        <img src={dotsThreeIcon} className="absolute bottom-6 left-6" />
      </div>
      <button className="mainButton w-[84px] h-[48px]">ارسال</button>
    </div>
  );
};

export { AddComment };
