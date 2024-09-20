import { lazy, Suspense } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { noopReturnNull } from '@/utils/common';

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? noopReturnNull // Render nothing in production
        : lazy(async () => {
              const res = await import('@tanstack/router-devtools');
              return {
                  default: res.TanStackRouterDevtools,
              };
          });

export const Route = createRootRoute({
    component() {
        return (
            <>
                <Outlet />
                <Suspense>
                    <TanStackRouterDevtools />
                </Suspense>
            </>
        );
    },
});
