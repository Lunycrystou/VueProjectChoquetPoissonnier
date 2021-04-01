import {createRouter, createWebHashHistory} from 'vue-router';
import SpellSearch from '../components/APIDnD.vue';
import resultSearchSpell from '../components/resultSearchSpell.vue';

const routes = [
  {
    path: '/spells',
    component: SpellSearch,
  },

  {
    path: '/spells/:name',
    component: resultSearchSpell,
    props: true,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;