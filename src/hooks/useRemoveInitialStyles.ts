import { useLayoutEffect } from 'react';

/**
 * Hook used to remove the initial styles added to the document.
 */
export const useRemoveInitialStyles = () => {
    useLayoutEffect(() => {
        document.getElementById('initial-styles')?.remove();
    }, []);
};
