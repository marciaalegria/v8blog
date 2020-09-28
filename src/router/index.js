import Vue from 'vue'
import VueRouter from 'vue-router'
import Articulo from './views/Articulo'
import Inicio from './views/Inicio'
import Contacto from './views/Contacto'

import NotFound from './views/NotFound'
import SobreMi from './views/SobreMi'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/articulo',
    name: 'articulo',
    component: Articulo
   },
   {
    path: '/notfound',
    component: NotFound
    },
    {
      path: '/sobremi',
      component: SobreMi
      },
  {
    path: '/contacto',
    component: Contacto,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
