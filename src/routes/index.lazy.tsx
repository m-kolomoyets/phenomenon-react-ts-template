import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component() {
        return <h1>Index</h1>;
    },
});
