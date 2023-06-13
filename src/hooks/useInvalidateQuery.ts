import { useState, useCallback, useMemo } from 'react';
import { useQueryClient, CancelledError } from '@tanstack/react-query';

export const useInvalidateQuery = (queryKey: string, ...rest: string[]): [boolean, () => Promise<void>] => {
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(false);
    const memoizedQueryKey = useMemo(() => {
        return [queryKey, ...rest];
    }, [queryKey, rest]);

    const invalidateQuery = useCallback(async () => {
        setIsLoading(true);

        try {
            await queryClient.invalidateQueries(
                {
                    queryKey: memoizedQueryKey,
                },
                { throwOnError: true }
            );
        } catch (e) {
            if (e instanceof CancelledError) {
                return;
            }
        } finally {
            setIsLoading(false);
        }
    }, [memoizedQueryKey, queryClient]);

    return [isLoading, invalidateQuery];
};
