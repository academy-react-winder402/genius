import http from "../../interceptor";

export const landingReportAPI = async () => {
  try {
    const response = http.get("/Home/LandingReport");

    return response;
  } catch (error) {
    return false;
  }
};
