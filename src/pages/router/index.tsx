import { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants';

const Router: React.FC = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path="/">
                    <Route index element={<div />} />
                </Route>
                <Route path={ROUTES.NOT_FOUND} element={<div />} />
                <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
