import http from "../../interceptor";

interface registerAPIProps {
  user: {
    password: string;
    gmail: string;
    phoneNumber: string;
  };
}

export const registerAPI = async ({ user }: registerAPIProps) => {
  try {
    const response = await http.post("/Sign/Register", user);

    return response;
  } catch (error) {
    return false;
  }
};
