import React from "react";

interface CourseLikeBoxProps {
  classes?: string;
  likeCount: number;
}

const CourseLikeBox = ({ classes, likeCount }: CourseLikeBoxProps) => {
  return (
    <div className={`courseLikeBox ${classes}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-[4px]"
      >
        <path
          d="M8.41337 13.8736C8.18671 13.9536 7.81337 13.9536 7.58671 13.8736C5.65337 13.2136 1.33337 10.4602 1.33337 5.79356C1.33337 3.73356 2.99337 2.06689 5.04004 2.06689C6.25337 2.06689 7.32671 2.65356 8.00004 3.56023C8.67337 2.65356 9.75337 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41337 13.8736Z"
          stroke="#F44336"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {likeCount}
    </div>
  );
};
export { CourseLikeBox };
