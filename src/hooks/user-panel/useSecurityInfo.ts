import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { SecurityInfo } from "../../types/security-info";

const useSecurityInfo = () => {
  return useQuery({
    queryKey: ["securityInfo"],
    queryFn: async () =>
      await http
        .get<SecurityInfo>("/SharePanel/GetSecurityInfo")
        .then((res) => res.data),
  });
};

export { useSecurityInfo };
