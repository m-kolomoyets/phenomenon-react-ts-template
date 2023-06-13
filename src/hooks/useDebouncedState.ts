import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export const useDebouncedState = <T>(initialValue: T, delay = 300) => {
    const [value, setValue] = useState(initialValue);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return [value, debouncedValue, setValue] as const;
};
