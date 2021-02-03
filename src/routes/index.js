import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../views/Home')
const About = () => import('../views/About')
const ArticleDetail = () => import('../views/ArticleDetail')


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/detail/:id',
        component: ArticleDetail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router