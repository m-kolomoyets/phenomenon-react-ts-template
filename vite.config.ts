/// <reference  types="@svg-use/vite/client"  />

import { fileURLToPath } from 'node:url';
import svgUse from '@svg-use/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            TanStackRouterVite(),
            svgUse(),
            eslint({ exclude: ['/virtual:/', 'node_modules/**'] }),
            visualizer({
                filename: './tmp/bundle-visualizer.html',
            }),
        ],
        base: env.VITE_BASE_PUBLIC_PATH,
        test: {
            environment: 'jsdom',
        },
        build: {
            assetsInlineLimit(filePath) {
                return !filePath.endsWith('.svg');
            },
        },
        resolve: {
            alias: [
                {
                    find: '@/icons',
                    replacement: fileURLToPath(new URL('./src/icons', import.meta.url)),
                },
                {
                    find: '@',
                    replacement: '/src',
                },
            ],
        },
        server: {
            port: 3000,
        },
        preview: {
            port: 4173,
        },
    };
});
