import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/accueil',
    },
    {
      path: '/accueil',
      component: Home,
    },
    {
      path:"/association",
      redirect: '/association/presentation',
    },
    {
      path: '/association/histoire',
      component: () => import('./routes/Association/Histoire.vue'),
    },
    {
      path: '/association/presentation',
      component: () => import('./routes/Association/Presentation.vue'),
    },
  ],
})
