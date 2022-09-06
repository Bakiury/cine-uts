import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component: () => import('@/layout/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/modules/movies/views/Home.vue'),
            },
            {
                path: 'cartelera',
                name: 'Cartelera',
                component: () => import('@/modules/movies/views/Cartelera.vue'),
            },
            {
                path: 'pelicula/:id',
                name: 'Pelicula',
                component: () => import('@/modules/movies/views/Pelicula.vue'),
            },
            {
                path: 'proximamente',
                name: 'Proximamente',
                component: () => import('@/modules/movies/views/Proximamente.vue'),
            },
            {
                path: '/unauthorized',
                name: 'Unauthorized',
                component: () => import('@/views/Unauthorized.vue')
            },
            {
                path: '',
                redirect: { path: '' },
            }
        ],
    },
    { path: '/:pathMatch(.*)*', redirect: { path: '' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
