import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string, defaultValue = false) => {
    const [matches, setMatches] = useState(defaultValue);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        media.addEventListener('change', listener);

        return () => {
            media.removeEventListener('change', listener);
        };
    }, [matches, query]);

    return matches;
};
