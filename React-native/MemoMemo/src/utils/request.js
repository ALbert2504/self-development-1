import axios from 'axios';

const axiosApi = axios.create({
  baseURL: process.env.BASE_URL,
});

const request = (method, url, data = null) => {
  return axiosApi.request({
    method,
    url,
    data,
  }).then((response) => {
    return response;
  }).catch((error) => {
    return error.response;
  });
};

export default request;
