import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/designer',
        name: 'Designer',
        component: () => import('@/views/Designer.vue')
    },
    {
        path: '/preview/:id',
        name: 'Preview',
        component: () => import('@/views/Preview.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
