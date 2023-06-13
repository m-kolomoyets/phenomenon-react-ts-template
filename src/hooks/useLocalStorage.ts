import { useState, useCallback } from 'react';

export const useLocalStorage = (key: string, initialValue: string | null) => {
    const [storedValue, setStoredValue] = useState<string | null>(() => {
        const item = localStorage.getItem(key);

        return item ? item : initialValue;
    });

    const getValue = useCallback(() => {
        const item = localStorage.getItem(key);

        setStoredValue(item);
    }, [key]);

    const setValue = useCallback(
        (value: string | null) => {
            setStoredValue(value);
            typeof value === 'string' ? localStorage.setItem(key, value) : localStorage.removeItem(key);
        },
        [key]
    );

    return [storedValue, setValue, getValue] as const;
};
