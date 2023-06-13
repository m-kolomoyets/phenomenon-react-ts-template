import { useCallback, useState } from 'react';

export const useToggle = (
    defaultValue?: boolean
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [value, setValue] = useState(Boolean(defaultValue));

    const toggle = useCallback(() => {
        setValue((x) => {
            return !x;
        });
    }, []);

    return [value, toggle, setValue];
};
