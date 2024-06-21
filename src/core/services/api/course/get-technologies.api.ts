import http from "../../interceptor";

import { TechnologiesInterface } from "../../../../types/technologies";

export const getTechnologiesAPI = async () => {
  try {
    const response = await http.get<TechnologiesInterface[]>(
      "/Home/GetTechnologies"
    );

    return response.data;
  } catch (error) {
    return false;
  }
};
