import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { ProfileInfoInterface } from "../../types/profile-info";

const useProfileInfo = () => {
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () =>
      await http
        .get<ProfileInfoInterface>("/SharePanel/GetProfileInfo")
        .then((res) => res.data),
  });
};

export { useProfileInfo };
