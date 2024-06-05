import http from "../../interceptor";

export const postNewsRateAPI = async (newsId: string, rateNumber: number) => {
  try {
    const response = await http.post("/News/NewsRate", undefined, {
      params: {
        newsId,
        rateNumber,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};
