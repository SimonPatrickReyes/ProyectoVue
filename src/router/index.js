import { createRouter, createWebHistory } from "vue-router"
import Tienda from '../pages/Tienda.vue' 



const routes = [
    {path: '/',name: 'Tienda', component: Tienda},
    {path: '/novedades',name: 'Novedades', component: ()=>import('@/pages/Novedades.vue')},
    {path: '/biblioteca',name: 'Biblioteca', component:  ()=>import('@/pages/Biblioteca.vue')},
    {path: '/videogames/:id', name: 'videogames.show', component: ()=>import('@/pages/VideogamesShow.vue')},
    {path: '/login', name:'login', component: ()=>import('@/pages/Login.vue')},
    {path: '/profile', name:'profile', component: ()=>import('@/pages/Profile.vue')},
    {path: '/register', name:'register', component: ()=>import('@/pages/Register.vue')},
    {path:"/:patchMatch(.*)*", name:"NotFound", component: () => import('@/pages/NotFound.vue')},
    {path: '/checkout', name: 'checkout', component: ()=>import('@/pages/CheckOut.vue')},
    

    
    
]



const router=createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'vue-active-link'
})

export default router