import { devtools } from 'zustand/middleware';
import { IS_DEV } from '@/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const middlewares = (storeName: string, fn: any) => {
    return IS_DEV ? devtools(fn, { name: storeName, serialize: { options: true } }) : fn;
};
