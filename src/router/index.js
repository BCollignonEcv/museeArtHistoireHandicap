import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.page.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/observatoire',
        name: 'Observatoire',
        component: () => import('../pages/Observatoire.page.vue'),
        children: [
            {
                path: '/association',
                name: 'Association',
                component: () => import('../pages/Association.page.vue'),
            },
            {
                path: '/comite-scientifique',
                name: 'ComiteScientifique',
                component: () => import('../pages/ComiteScientifique.page.vue'),
            },
            {
                path: '/publications',
                name: 'Publications',
                component: () => import('../pages/Publications.page.vue'),
                children: [
                    {
                        path: ':id',
                        name: 'Publication',
                        component: () => import('../pages/Publication.page.vue'),
                    }
                ]
            },
            {
                path: '/lab-ohm',
                name: 'LabOHM',
                component: () => import('../pages/LabOHM.page.vue'),
            },
        ]
    },
    {
        path: '/musee',
        name: 'Musee',
        component: () =>
            import('../pages/Musee.page.vue')
    },
    {
        path: '/presse',
        name: 'Presses',
        component: () => import('../pages/Presses.page.vue'),
        children: [
            {
                path: ':id',
                name: 'Presse',
                component: () => import('../pages/Presse.page.vue'),
            }
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import('../pages/Contact.page.vue')
    },
    {
        path: '/dons',
        name: 'Dons',
        component: () =>
            import('../pages/Dons.page.vue')
    },
    {
        path: '/adhesion',
        name: 'Adhesion',
        component: () =>
            import('../pages/Adhesion.page.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () =>
            import('../pages/NotFound.page.vue')
    },
    ]
})

export default router