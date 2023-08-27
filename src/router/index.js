import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/pages/Home.vue";
import ServicePage from "../components/pages/ServicePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/services',
            name: 'services',
            component: ServicePage
        }
    ]
})

export default router