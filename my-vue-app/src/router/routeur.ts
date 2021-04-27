import {createRouter, createWebHistory} from 'vue-router';
import SpellSearch from '../components/spellSearch.vue';
import resultSearchSpell from '../components/resultSearchSpell.vue';
import Accueil from '../components/Accueil.vue';
import speciesSearch from '../components/speciesSearch.vue';
import resultSpeciesSearch from '../components/resultSpeciesSearch.vue';

const routes = [
  {
    path: '/',
    component: Accueil,
  },
  {
    path: '/home',
    component: Accueil,
  },
  
  {
    path: '/spells',
    component: SpellSearch,
  },

  {
    path: '/spells/:name',
    component: resultSearchSpell,
  },

  {
    path: '/species',
    component: speciesSearch,
  },
  {
    path: '/species/:name',
    component: resultSpeciesSearch,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;