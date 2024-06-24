import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { LandingReportInterface } from "../../types/landing-report";

const useLandingReport = () => {
  return useQuery({
    queryKey: ["landing-report"],
    queryFn: async () =>
        await http
        .get<LandingReportInterface>("/Home/LandingReport")
        .then((res) => res.data),
  });
};

export { useLandingReport };
