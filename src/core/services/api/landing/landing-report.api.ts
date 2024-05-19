import http from "../../interceptor";

import { LandingReportInterface } from "../../../../types/landing-report";

export const landingReportAPI = async () => {
  try {
    const response = await http.get<LandingReportInterface>(
      "/Home/LandingReport"
    );

    return response;
  } catch (error) {
    return false;
  }
};
