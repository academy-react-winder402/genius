import http from "../../interceptor";

import { ProfileInfoInterface } from "../../../../types/profile-info";

export const getProfileInfoAPI = async () => {
  try {
    const response = await http.get<ProfileInfoInterface>(
      "/SharePanel/GetProfileInfo"
    );

    return response;
  } catch (error) {
    return false;
  }
};
