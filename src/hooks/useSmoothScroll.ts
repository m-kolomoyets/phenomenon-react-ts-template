import { useEffect } from 'react';

/**
 * Hook used to polyfill smoothscroll.
 */
export const useSmoothScroll = () => {
    useEffect(() => {
        import('smoothscroll-polyfill').then(({ polyfill }) => {
            return polyfill();
        });
    }, []);
};
