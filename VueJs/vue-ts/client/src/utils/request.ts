import axios, { Method, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const axiosApi = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

axiosApi.interceptors.request.use((req: AxiosRequestConfig) => {
  const id = JSON.parse(localStorage.getItem('user') || 'null')?.id;

  if (req && req.headers && id) {
    req.headers.Authorization = id;
  }

  return req;
});

export default function request<T = any, D = any>(method: Method, url: string, data?: D | null) {
  return axiosApi.request({
    method: method,
    url,
    data: data,
  }).then((response: AxiosResponse<T>): AxiosResponse<T> => {
    return response;
  }).catch((error: AxiosError) => {
    if (error.response?.data?.message) {
      toast(error.response.data.message);
    }
    return error.response;
  });
}