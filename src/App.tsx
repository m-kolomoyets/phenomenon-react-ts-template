import { BrowserRouter } from 'react-router-dom';
import { useRemoveInitialStyles } from '@/hooks/useRemoveInitialStyles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { BASE_PUBLIC_PATH } from '@/constants';
import Router from '@/pages/router';

const App: React.FC = () => {
    useRemoveInitialStyles();
    useSmoothScroll();

    return (
        <BrowserRouter basename={BASE_PUBLIC_PATH}>
            <Router />
        </BrowserRouter>
    );
};

export default App;
