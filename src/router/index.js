import Vue from 'vue'
import VueRouter from 'vue-router'
//import Articulo from './views/Articulo'
//import Inicio from './views/Inicio'
import Contacto from '../views/Contacto'

import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/articulo',
    name: 'Articulo',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue')
   },
   {
    path: '/notfound',
    component: NotFound
    },
    {
      path: '/sobremi',
      name: 'SobreMi',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Foter.vue')
      },
      {
        path: '/administrador',
        name: 'Administrador',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/Administrador.vue')
  },
  {
    path: '/contacto',
    component: Contacto
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
