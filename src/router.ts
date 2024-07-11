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
      component: () => import('./routes/Histoire.vue'),
    },
    {
      path: '/presentation',
      
      component: () => import('./routes/Presentation.vue'),
    },
  ],
})
