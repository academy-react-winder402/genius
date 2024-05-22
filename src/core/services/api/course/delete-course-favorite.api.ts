import http from "../../interceptor";

export const deleteCourseFavoriteAPI = async (courseFavoriteId: string) => {
  try {
    const formData = new FormData();
    const response = await http.delete("", {
      data: {
        courseFavoriteId: formData.append("CourseFavoriteId", courseFavoriteId),
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};
