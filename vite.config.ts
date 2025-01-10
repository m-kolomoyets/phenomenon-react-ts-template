/// <reference  types="@svg-use/vite/client"  />

import { fileURLToPath } from 'node:url';
import svgUse from '@svg-use/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

// https://vitejs.dev/config/
export default defineConfig(() => {
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
        build: {
            target: ['es2021', 'edge91', 'firefox90', 'chrome91', 'safari15', 'opera77'],
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
