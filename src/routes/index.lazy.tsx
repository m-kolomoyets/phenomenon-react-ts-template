import { createLazyFileRoute } from '@tanstack/react-router';
import Home from '@/modules/Home';

export const Route = createLazyFileRoute('/')({
    component: Home,
});
