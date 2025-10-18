import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import GalleryWrapper from "../components/GalleryWrapper.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/auth',
        component: AuthWrapper
    },
    {
        path: '/gallery',
        component: GalleryWrapper
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
