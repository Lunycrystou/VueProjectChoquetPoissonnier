import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const store = createStore({
  state() {
    return {
      nbVisites: 0,
      nbRecherches: 0,
      data: {},
    };
  },
  getters: {
    getNbVisites: (state) => state.nbVisites,
    getNbRecherches: (state) => state.nbRecherches,
    getData: (state) => state.data,
  },
  mutations: {
    setNbVisites(state, count) {
      state.nbVisites = count;
    },
    setNbRecherches(state, count) {
      state.nbRecherches = count;
    },
    incrementVisite(state) {
      state.nbVisites ++;
    },
    incrementRecherche(state) {
      state.nbRecherches ++;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  plugins: [ // On crée des cookies pour éviter que le nombre de visites et recherches retourne à 0 quand on actualise le site
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 7, secure: true })
    })
  ]
});

export default store;