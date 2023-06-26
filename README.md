This project was bootstrapped with [Vite.js](https://vitejs.dev).

## 📦 Stack

-   [React.js](https://reactjs.org) - UI library
-   [Typescript](https://www.typescriptlang.org) - Static type checker
-   [TailwindCSS](https://tailwindcss.com) - CSS framework

## 🚀 Quick start

1. Install [Node.js](https://nodejs.org);
    > Require [Node.js](https://nodejs.org) version >=16.0.0
2. Install the NPM dependencies by running `npm ci`;
3. If you want to serve the application with base public path on your server, you should create `.env.production.local` and add the variable `VITE_BASE_PUBLIC_PATH="/foo"`.

## 🤖 Commands

-   Run the local dev server at `localhost:3000`:
    ```
    npm run dev
    ```
-   Build your production site to `./dist/`:
    ```
    npm run build
    ```
-   Preview your build locally, before deploying at `localhost:4173`:
    ```
    npm run preview
    ```
-   Check your JavaScript/TypeScript for errors and warnings:
    ```
    npm run lint:eslint
    ```
-   Check your CSS for errors and warnings:
    ```
    npm run lint:stylelint
    ```
-   Check your code formatting:
    ```
    npm run lint:prettier
    ```
-   Fix your code formatting:
    ```
    npm run lint:prettier:fix
    ```
-   Check your code all together:
    ```
    npm run lint
    ```
-   Install husky:
    ```bash
    npm run prepare
    ```

## 🧶 Structure

> To create components [create-phen-component](https://github.com/m-kolomoyets/create-phen-component) CLI can be used

-   `src/ui` contains some shared components without business logic like buttons, inputs, selects, titles, texts etc. Each component should consist of that files:

    -   `<component-name>.tsx` - the component file itself (change `component-name` to the actual name of the component);
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `<util-name>.test.ts` - the test file of util;
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `index.ts` - the entry file for component;

-   `src/components` a less independent entity consisting of `src/ui` components. For example the card component, it can be used anywhere. It can have little business logic. Each component should consist of that files:
    -   `<component-name>.tsx` - the component file itself;
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `schemas.ts` - the schemas of component file (optional);
    -   `utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `<util-name>.test.ts` - the test file of util;
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `store` - contains local store dir (optional). Should consist of:
        -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
    -   `context` - the context dir of component file (optional). Should consist of:
        -   `<context-name>.tsx` - the context file itself (change `scontext-nam` to the actual name of the context);
    -   `index.ts` - the entry file for component;
    -   `components` - the component dir of components (optional). Should consist of like `src/components`;
-   `src/components/layout` contains some layouts. It should use like wrapper;
-   `src/modules` contains some independent features, that features have own area of responsibility. We can use here connecting to store, fetch some data etc. For example we have the Comments module, it should consist of `src/components`, `src/ui` and own components. Each module should consist of that files:
    -   `<component-name>.tsx` - the component file itself;
    -   `<component-name>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `hooks` - contains component hooks (optional). Should include:
        -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
    -   `constants.ts` - the constants of component file (optional);
    -   `schemas.ts` - the schemas of component file (optional);
    -   `utils` - the utils of component (optional). Should include:
        -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
        -   `<util-name>.test.ts` - the test file of util;
        -   `common.ts` - the common file of utils (optional). Can be used without tests;
    -   `store` - contains local store dir (optional). Should consist of:
        -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
    -   `context` - the context dir of component file (optional). Should consist of:
        -   `<context-name>.tsx` - the context file itself (change `scontext-nam` to the actual name of the context);
    -   `index.ts` - the entry file for component;
    -   `components` - the component dir of components (optional). Should consist of like `src/components`;
-   `src/pages` should consist of contains `src/modules` and just render them. Each page should consist of that files:
    -   `<page-name>.tsx` - the component of page file itself (change `page-name` to the actual name of the page) ;
    -   `router` - the router dir. Should consist of:
        -   `index.tsx` - the main file for the router;
-   `src/api` contains api dir. Should consist of:
    -   `<api-name>.ts` - the api file itself (change the `api-name` to the actual api name);
-   `src/store` contains global store dir. Should consist of:
    -   `<store-name>.ts` - the store file itself (change `store-name` to the actual name of the store);
-   `src/hooks` contains global hooks dir. Should consist of:
    -   `api` - contains api hooks dir;
    -   `<hook-name>.ts` - the hook file itself (change `hook-name` to the actual name of the hook);
-   `src/utils` contains global utils dir. Should consist of:
    -   `<util-name>.ts` - the util file itself (change `util-name` to the actual name of util);
    -   `<util-name>.test.ts` - the test file of util;
    -   `common.ts` - the common file of utils (optional). Can be used without tests;
-   `src/constants.ts` contains global constants;
-   `schemas.ts` - contains globals schemas;
-   `src/types.ts` contains global types;
-   `src/styles` contains global style files;
-   `src/main.tsx` and `src/App.tsx` are entry points of application;
