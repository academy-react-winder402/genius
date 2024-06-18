import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";

import { isUserLoginChange } from "../../../redux/user-login";

import { getItem, removeItem } from "../common/storage.services";
import { toast } from "react-toastify";

interface AxiosErrorMessage {
  ErrorMessage: string[];
}

const baseURL: string = import.meta.env.VITE_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response.data;
};

const onError = (err: AxiosError<AxiosErrorMessage>) => {
  const dispatch = useDispatch();

  err.response?.ErrorMessage.map((error) => toast.error(error));

  if (err.response?.status === 401) {
    removeItem("token");

    dispatch(isUserLoginChange(false));
    window.location.pathname = "/login";
  }

  Promise.reject(err);
};

instance.interceptors.request.use((opt) => {
  const token = getItem("token");

  if (token && token !== null) opt.headers.Authorization = "Bearer " + token;
  return opt;
});
instance.interceptors.response.use(onSuccess, onError);

export default instance;
