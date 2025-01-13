import { createBrowserRouter, RouteObject } from 'react-router-dom';

const staticRoutes: RouteObject[] = [
    {
        index: true,
        path: '/',
        lazy: async () => ({
            Component: (await import('@/pages/home/index')).default
        }),
        hydrateFallbackElement: <>Loading</>
    },
    {
        path: '*',
        Component: () => <>404</>
    }
];

const router = createBrowserRouter(staticRoutes);

export default router;
