import { useEffect } from 'react';

/**
 * Hook used to set a global custom property for CSS.
 * @param name The name of the custom property.
 * @param value The value of the custom property.
 */
export const useSetGlobalCustomProperty = (name: string, value: string) => {
    useEffect(() => {
        document.documentElement.style.setProperty(name, value);
    }, [name, value]);
};
