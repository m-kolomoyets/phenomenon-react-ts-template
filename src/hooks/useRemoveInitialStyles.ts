import { useLayoutEffect } from 'react';

export const useRemoveInitialStyles = () => {
    useLayoutEffect(() => {
        document.getElementById('initial-styles')?.remove();
    }, []);
};
