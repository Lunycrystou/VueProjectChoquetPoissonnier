import {createRouter, createWebHistory} from 'vue-router';
import SpellSearch from '../components/spellSearch.vue';
import resultSearchSpell from '../components/resultSearchSpell.vue';
import Accueil from '../components/Accueil.vue';

const routes = [
  {
    path: '/',
    component: Accueil,
  },
  
  {
    path: '/spells',
    component: SpellSearch,
  },

  {
    path: '/spells/:name',
    component: resultSearchSpell,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;