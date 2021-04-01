import { createRouter, createWebHashHistory } from 'vue-router';
import SpellSearch from '../components/APIDnD.vue';

const routes = [
  {
    path: '/',
    component: Calculatrice,
  },
  {
    path: '/Exo1',
    component: Exo1,
  },
  {
      path: '/MetreConverter',
      component: MetreConverter,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;