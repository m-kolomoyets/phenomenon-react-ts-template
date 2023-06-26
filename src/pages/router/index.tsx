import { Suspense, lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants';

const HomePage = lazy(() => {
    return import('@/pages/HomePage');
});
const NotFoundPage = lazy(() => {
    return import('@/pages/NotFoundPage');
});

const Router: React.FC = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                </Route>
                <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
                <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
