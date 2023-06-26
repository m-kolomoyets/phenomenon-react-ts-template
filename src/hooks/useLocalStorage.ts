import { useState, useCallback, useEffect } from 'react';
import type { SetStateValue } from '@/types';

/**
 * Hook to use localStorage to store and manage value with useState.
 * @param key The key to use in localStorage.
 * @param initialValue The initial value to use.
 * @returns A tuple with the stored value, a function to set the value.
 */
export const useLocalStorage = <T>(key: string, initialValue: T): [T, SetStateValue<T>] => {
    const readValue = useCallback((): T => {
        const item = localStorage.getItem(key);

        try {
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (_error) {
            return item ? (item as T) : initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: SetStateValue<T> = useCallback(
        (value) => {
            const newValue = value instanceof Function ? value(storedValue) : value;

            if (newValue || typeof newValue === 'string' || typeof newValue === 'number') {
                localStorage.setItem(key, typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue));
            } else {
                localStorage.removeItem(key);
            }

            setStoredValue(newValue);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [key]
    );

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
};
