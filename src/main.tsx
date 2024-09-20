import React from 'react';
import { configContext as SvgUseConfigContext } from '@svg-use/react';
import ReactDOM from 'react-dom/client';
import type { Config } from '@svg-use/react';
import { IS_DEV } from './constants';
import App from './App';
import '@/styles/index.css';

const config: Config = {
    rewritePath: (pathOrHref) => {
        return pathOrHref;
    },
    // enable this for DEV only
    runtimeChecksEnabled: IS_DEV,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SvgUseConfigContext.Provider value={config}>
            <App />
        </SvgUseConfigContext.Provider>
    </React.StrictMode>
);
