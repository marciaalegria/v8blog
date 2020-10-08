import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import Contacto from './views/Contacto'
import Articulo from './views/Articulo'
import NotFound from './views/NotFound'
import SobreMi from './views/SobreMi'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
    path: '/',
    component: Inicio
    },
    {
    path: '/contacto',
    component: Contacto
    },
    {
    path: '/articulo',
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

    ]
   })