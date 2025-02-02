import { lazy, Suspense } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';

const TanStackRouterDevtools = import.meta.env.DEV
    ? lazy(async () => {
          const res = await import('@tanstack/router-devtools');

          return {
              default: res.TanStackRouterDevtools,
          };
      })
    : () => {
          return null;
      };

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
