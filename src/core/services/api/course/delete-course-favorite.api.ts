import http from "../../interceptor";

export const deleteCourseFavoriteAPI = async (courseFavoriteId: string) => {
  try {
    const response = await http.delete("/Course/DeleteCourseFavorite", {
      data: {
        courseFavoriteId,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};
