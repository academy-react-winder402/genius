import http from "../../interceptor";

export const setCourseRatingAPI = async (
  courseId: string,
  rateNumber: number
) => {
  try {
    const response = await http.post(
      `/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${rateNumber}`
    );

    return response;
  } catch (error) {
    return false;
  }
};
