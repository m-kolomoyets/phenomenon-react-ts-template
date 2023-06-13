import { useEffect } from 'react';

export const useSetGlobalCustomProperty = (name: string, value: string) => {
    useEffect(() => {
        document.documentElement.style.setProperty(name, value);
    }, [name, value]);
};
