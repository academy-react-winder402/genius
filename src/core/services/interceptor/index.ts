import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const baseURL: string = import.meta.env.VITE_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response.data;
};

const onError = (err: AxiosError) => {
  if (err?.response?.status! >= 400 && err.response.status < 500) {
    alert("Client Error: ", err.response.status);
  }

  Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
