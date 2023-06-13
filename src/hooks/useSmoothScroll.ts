import { useEffect } from 'react';

export const useSmoothScroll = () => {
    useEffect(() => {
        import('smoothscroll-polyfill').then(({ polyfill }) => {
            return polyfill();
        });
    }, []);
};
