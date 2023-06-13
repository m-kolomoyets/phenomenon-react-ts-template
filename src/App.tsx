import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { useRemoveInitialStyles } from '@/hooks/useRemoveInitialStyles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { BASE_PUBLIC_PATH, IS_DEV, STATUS_CODE_FORBIDDEN, STATUS_CODE_UNAUTHORIZED } from '@/constants';
import Router from '@/pages/router';

const App: React.FC = () => {
    useRemoveInitialStyles();
    useSmoothScroll();

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry(failureCount, error) {
                    const isAxiosError = error instanceof AxiosError;
                    const isTrying = failureCount < 2;

                    if (!isAxiosError) {
                        return isTrying;
                    }

                    const statusCode = error.response?.status;

                    if (statusCode === STATUS_CODE_UNAUTHORIZED || statusCode === STATUS_CODE_FORBIDDEN) {
                        return false;
                    }

                    return isTrying;
                },
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename={BASE_PUBLIC_PATH}>
                <Router />
            </BrowserRouter>
            {IS_DEV && <ReactQueryDevtools />}
        </QueryClientProvider>
    );
};

export default App;
