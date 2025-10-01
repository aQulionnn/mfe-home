import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import Layout from '../components/Layout.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/auth',
        component: Layout,
        children: [
            {
                path: '',
                component: AuthWrapper
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
