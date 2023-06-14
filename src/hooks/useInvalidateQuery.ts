import { useState, useCallback, useMemo } from 'react';
import { useQueryClient, CancelledError } from '@tanstack/react-query';

/**
 * Hook used to invalidate a query
 * @param queryKey The query key to invalidate.
 * @param rest The rest of the query key (params used in query).
 * @returns A tuple with a boolean indicating if the query is loading and a function to invalidate the query.
 */
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
