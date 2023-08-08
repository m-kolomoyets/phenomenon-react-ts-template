import { BrowserRouter } from 'react-router-dom';
import { BASE_PUBLIC_PATH } from '@/constants';
import Router from '@/pages/router';
import MainLayout from '@/components/layouts/MainLayout';

const App: React.FC = () => {
    return (
        <BrowserRouter basename={BASE_PUBLIC_PATH}>
            <MainLayout>
                <Router />
            </MainLayout>
        </BrowserRouter>
    );
};

export default App;
