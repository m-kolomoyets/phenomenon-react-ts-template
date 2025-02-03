import axios from 'axios';
import { getAccessToken } from '@/utils/auth/tokens';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    adapter: 'fetch',
});

export const httpPrivate = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    adapter: 'fetch',
});

httpPrivate.interceptors.request.use(
    (config) => {
        const token = getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.withCredentials = true;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
