import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Historical from '../pages/historical'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/historical',
        component:Historical
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;