import axios from 'axios';
import { API_URL, LS_JWT_TOKEN } from '@/constants';

export const http = axios.create({
    baseURL: API_URL,
});

export const httpPrivate = axios.create({
    baseURL: API_URL,
});

const createJWTString = () => {
    const token = localStorage.getItem(LS_JWT_TOKEN);

    return `JWT ${token}`;
};

httpPrivate.interceptors.request.use(
    (config) => {
        // TODO: Cookies
        config.headers.Authorization = createJWTString();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
