import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/histoire',
      component: () => import('./routes/Association/Histoire.vue'),
    },
    {
      path: '/presentation',
      
      component: () => import('./routes/Association/Presentation.vue'),
    },
  ],
})
