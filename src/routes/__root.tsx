import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';

const TanStackRouterDevtools = import.meta.env.DEV
    ? React.lazy(async () => {
          const res = await import('@tanstack/router-devtools');

          return {
              default: res.TanStackRouterDevtools,
          };
      })
    : () => {
          return null;
      };

const ReactQueryDevtools = import.meta.env.DEV
    ? React.lazy(async () => {
          const res = await import('@tanstack/react-query-devtools');

          return {
              default: res.ReactQueryDevtools,
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
                <React.Suspense>
                    <TanStackRouterDevtools />
                    <ReactQueryDevtools />
                </React.Suspense>
            </>
        );
    },
});
