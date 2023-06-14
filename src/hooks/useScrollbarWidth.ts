import { useEffect, useState } from 'react';
import { scrollbarWidth } from '@xobotyi/scrollbar-width';

/**
 * Hook to get the scrollbar width.
 * @returns The scrollbar width.
 */
export const useScrollbarWidth = (): number => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [sbw, setSbw] = useState<number>(scrollbarWidth()!);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSbw(scrollbarWidth()!);
        });

        return () => {
            return cancelAnimationFrame(raf);
        };
    }, []);

    return sbw;
};
