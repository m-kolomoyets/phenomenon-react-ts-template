import { useEffect, useState } from 'react';
import { scrollbarWidth } from '@xobotyi/scrollbar-width';

/**
 * Hook to get the scrollbar width.
 * @returns The scrollbar width.
 */
export const useScrollbarWidth = (): number => {
    const [sbw, setSbw] = useState<number>(scrollbarWidth()!);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setSbw(scrollbarWidth()!);
        });

        return () => {
            return cancelAnimationFrame(raf);
        };
    }, []);

    return sbw;
};
