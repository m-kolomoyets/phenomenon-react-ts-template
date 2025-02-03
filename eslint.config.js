import eslint from '@eslint/js';
import pluginTanstackQuery from '@tanstack/eslint-plugin-query';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    ignores: ['**/dist/**', '**/tmp/**', '/src/routeTree.gen.ts'],
    files: ['**/*.{js,ts,tsx,cjs,mjs}'],
    extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        eslintPluginPrettierRecommended,
        pluginTanstackQuery.configs['flat/recommended'],
    ],
    plugins: { react, 'react-hooks': reactHooksPlugin, '@tanstack/query': pluginTanstackQuery },
    languageOptions: {
        parserOptions: {
            project: ['./tsconfig.app.json', './tsconfig.node.json', './tsconfig.json'],
            tsconfigRootDir: import.meta.dirname,
            projectService: true,
            ecmaVersion: 2021,
            ecmaFeatures: {
                jsx: true,
            },
            globals: {
                ...globals.browser,
            },
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        ...reactHooksPlugin.configs.recommended.rules,
        'react/react-in-jsx-scope': ['off'],
        'react/prop-types': ['off'],
        'react/no-unused-prop-types': ['error'],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/jsx-no-useless-fragment': ['error'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'arrow-body-style': ['error', 'always'],
        'no-nested-ternary': ['error'],
        eqeqeq: ['error', 'always'],
        'no-alert': ['error'],
        'no-unneeded-ternary': ['error'],
        'require-await': ['error'],
        'no-tabs': ['error'],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'no-loop-func': ['error'],
        'comma-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-extra-semi': ['error'],
        'no-console': ['warn'],
        'no-debugger': ['error'],
        'block-spacing': ['error', 'always'],
        'max-nested-callbacks': [
            'error',
            {
                max: 7,
            },
        ],
        'no-trailing-spaces': ['error'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'no-var': ['error'],
        'no-multi-spaces': ['error'],
        'no-control-regex': ['off'],
    },
});
