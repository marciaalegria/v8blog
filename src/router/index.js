import Vue from 'vue'
import VueRouter from 'vue-router'

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
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/Contacto.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
