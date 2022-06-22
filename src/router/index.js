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
        path: '/observatoire/association',
        name: 'Association',
        component: () => import('../pages/Association.page.vue'),
    },
    {
        path: '/observatoire/comite-scientifique',
        name: 'ComiteScientifique',
        component: () => import('../pages/ComiteScientifique.page.vue'),
    },
    {
        path: '/observatoire/publications',
        name: 'Publications',
        component: () => import('../pages/Publications.page.vue'),
    },
    {
        path: '/observatoire/publications/:id',
        name: 'Publication',
        component: () => import('../pages/Publication.page.vue'),

    },
    {
        path: '/lab-ohm',
        name: 'LabOHM',
        component: () => import('../pages/LabOHM.page.vue'),
    },
    {
        path: '/musee/rouen',
        name: 'MuseeRouen',
        component: () =>
            import('../pages/MuseeRouen.page.vue')
    },
    {
        path: '/musee/virtuel',
        name: 'MuseeVirtuel',
        component: () =>
            import('../pages/MuseeVirtuel.page.vue')
    },
    {
        path: '/kit-pedagogique',
        name: 'Kit Pedagogique',
        component: () =>
            import('../pages/KitPedagogique.page.vue')
    },
    {
        path: '/presses',
        name: 'Presses',
        component: () => import('../pages/Presses.page.vue'),
    },
    {
        path: '/presses/:id',
        name: 'Presse',
        component: () => import('../pages/Presse.page.vue'),
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