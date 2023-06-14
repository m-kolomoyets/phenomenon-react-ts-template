/**
 * Environment variables
 */
export const IS_DEV = import.meta.env.DEV;
export const API_URL = import.meta.env.VITE_API_URL;
export const BASE_PUBLIC_PATH = import.meta.env.VITE_BASE_PUBLIC_PATH;

/**
 * API constants
 */
export const ERROR_CODE_CANCELED = 'ERR_CANCELED';
export const STATUS_CODE_UNAUTHORIZED = 401;
export const STATUS_CODE_FORBIDDEN = 403;
export const LS_JWT_TOKEN = 'jwt-token';

/**
 * Common constants
 */
export const DEFAULT_TRANSITION = { type: 'linear', duration: 0.15 };

/**
 * Routing constants
 */
export const ROUTES = {
    ROOT: '/',
    NOT_FOUND: '404',
    ANY: '*',
} as const;
