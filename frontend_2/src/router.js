import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import inicio from './components/Inicio.vue'
import login from './components/Login.vue'
import singUp from './components/Registrarse.vue'
import profile from './components/inicioexitoso.vue'
import enlistar from './components/enlistar.vue'
import nosotros from './components/nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/home',
    name: 'inicio',
    component: inicio
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/user/singUp',
    name: 'singUp',
    component: singUp
  },
  {
    path: '/enlistar',
    name: 'enlistar',
    component: enlistar
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: nosotros
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
