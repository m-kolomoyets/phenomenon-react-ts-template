import React from 'react';
import { configContext as SvgUseConfigContext } from '@svg-use/react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import type { Config } from '@svg-use/react';

import { routeTree } from './routeTree.gen';

import '@/styles/index.css';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const config: Config = {
    rewritePath: (pathOrHref) => {
        return pathOrHref;
    },
    runtimeChecksEnabled: import.meta.env.DEV,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SvgUseConfigContext.Provider value={config}>
            <RouterProvider router={router} />
        </SvgUseConfigContext.Provider>
    </React.StrictMode>
);
