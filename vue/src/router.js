
import { createRouter, createWebHistory } from 'vue-router'
import Landing from './components/Landing.vue'
// import Login from './components/Login.vue'
// import Registration from './components/Registration.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: Registration
        // },

    ]
})
export default router;