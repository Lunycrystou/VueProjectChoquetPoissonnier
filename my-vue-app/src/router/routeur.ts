import {createRouter, createWebHistory} from 'vue-router';

import SpellSearch from '../components/spellSearch.vue';
import resultSearchSpell from '../components/resultSearchSpell.vue';
import Accueil from '../components/Accueil.vue';
import speciesSearch from '../components/speciesSearch.vue';
import resultSpeciesSearch from '../components/resultSpeciesSearch.vue';
import classesSearch from '../components/classesSearch.vue';
import resultClassesSearch from '../components/resultClassesSearch.vue';
import equipmentSearch from '../components/equipmentSearch.vue';
import resultEquipmentSearch from '../components/resultEquipmentSearch.vue';

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
  },

  {
    path: '/classes',
    component: classesSearch,
  },
  {
    path: '/classes/:name',
    component: resultClassesSearch,
  },

  {
    path: '/equipment',
    component: equipmentSearch,
  },
  {
    path: '/equipment/:name',
    component: resultEquipmentSearch,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;