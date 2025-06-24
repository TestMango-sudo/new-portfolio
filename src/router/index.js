import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import('../views/Home.vue')
        },
        {
            path: "/about",
            component: () => import('../views/About.vue')
        },
        {
            path: "/projects",
            component: () => import('../views/Project.vue')
        },
        {
            path: "/contact",
            component: () => import('../views/Contact.vue')
        },
        {
            path: "/profile",
            component: () => import('../views/Profile.vue')
        },
         {
            path: "/settings",
            component: () => import('../views/Settings.vue'),
            props: true
        }
    ] 
})

export default router