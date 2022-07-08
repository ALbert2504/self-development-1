import axios, {Method, AxiosResponse, AxiosError} from 'axios';

import {REACT_APP} from "./constants";

export default function request(method: Method, url: string, data?: any | null) {
    return axios.request({
        method: method,
        url: `${process.env[`${REACT_APP}BASE_URL`]}${url}`,
        data: data,
    }).then((response: AxiosResponse) => {
        return response;
    }).catch((error: AxiosError) => {
        alert('Something went wrong.');
        return error.response;
    });
}