import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingPage.vue'),
    },
    
    {
      path: '/auth', // URL para acceder a la página de login/registro
      name: 'auth', // Nombre de la ruta
      component: () => import('../views/LoginRegister.vue') // Apunta al nuevo componente
    }
  ],
})

export default router
