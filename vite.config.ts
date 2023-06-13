import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            eslint({ exclude: ['**/virtual:/**', '**/node_modules/**'] }),
            visualizer({
                filename: './tmp/bundle-visualizer.html',
            }),
        ],
        base: env.VITE_BASE_PUBLIC_PATH,
        test: {
            environment: 'jsdom',
        },
        resolve: {
            alias: [{ find: '@', replacement: '/src' }],
        },
        server: {
            port: 3000,
        },
        preview: {
            port: 4173,
        },
    };
});
